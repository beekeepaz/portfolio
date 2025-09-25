import { Component } from '@angular/core';
import { Language } from '../global/language';
import { CommonModule } from '@angular/common';

type AnimState = 'neutral' | 'left' | 'right';
type AnimTriple = Record<AnimState, string>;

const ANIM_CLASSES: Record<number, AnimTriple> = {
  0: { neutral: 'd-none', left: 'd-none', right: 'single-comment-field preview left-in' },
  1: { neutral: 'single-comment-field preview', left: 'single-comment-field preview left', right: 'single-comment-field preview left-right' },
  2: { neutral: 'single-comment-field show-mid-color', left: 'single-comment-field mid-left', right: 'single-comment-field mid-right' },
  3: { neutral: 'single-comment-field preview', left: 'single-comment-field preview right', right: 'single-comment-field preview right-right' },
  4: { neutral: 'd-none', left: 'single-comment-field preview right-in', right: 'd-none' },
} as const;

@Component({
  selector: 'app-reevaluation',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './reevaluation.component.html',
  styleUrl: './reevaluation.component.scss'
})
export class ReevaluationComponent {

  public img = {
    quotes: '../../assets/img/quotes.png',
    leftDefault: '../../assets/img/left-arrow.png',
    leftHover: '../../assets/img/left-arrow-move.png',
    rightDefault: '../../assets/img/right-arrow.png',
    rightHover: '../../assets/img/right-arrow-move.png'
  };

  public isLeftHovered = false;
  public isRightHovered = false;

  private swipeThreshold = 50;
  private swipeRestraint = 80;
  private swipeTime = 600;

  private tracking = false;
  private startX = 0;
  private startY = 0;
  private startTime = 0;

  animationDuration = '800ms';
  animationTiming = 'ease-in-out';

  currentIndex = 0;
  animateleft = false;
  animateright = false;

  animationClasses: string[] = [];
  slides: string[] = [];
  slideIndex = 0;

  get leftArrowSrc(): string {
    return this.isLeftHovered ? this.img.leftHover : this.img.leftDefault;
  }
  get rightArrowSrc(): string {
    return this.isRightHovered ? this.img.rightHover : this.img.rightDefault;
  }

  private get animMs(): number {
    const n = Number(this.animationDuration.replace('ms', ''));
    return isNaN(n) ? 1000 : n;
  }

  constructor(public languageService: Language) { }

  /**
   * Init slides, compute starting segment, and set classes
   */
  ngOnInit(): void {
    this.slides = Array(3).fill('');
    this.slideIndex = this.computeSegment();
    this.calculateAnimationClasses();
  }

  /**
   * Hover handlers for arrows
   */
  onLeftEnter(): void {
    this.isLeftHovered = true;
  }

  /**
   * Hover handlers for arrows
   */
  onLeftLeave(): void {
    this.isLeftHovered = false;
  }

  /**
   * Hover handlers for arrows
   */
  onRightEnter(): void {
    this.isRightHovered = true;
  }

  /**
   * Hover handlers for arrows
   */
  onRightLeave(): void {
    this.isRightHovered = false;
  }

  /**
   * Map currentIndex into one of three dot segments (0..2)
   * @returns - as Segmentindex
   */
  private computeSegment(): number {
    const n = this.languageService.reevaluation.length || 1;
    const seg = Math.floor((this.currentIndex * 3) / n);
    return Math.max(0, Math.min(2, seg));
  }

  /**
   * Rebuild animation class list for all five slots
   */
  calculateAnimationClasses(): void {
    this.animationClasses = [0, 1, 2, 3, 4].map(index => this.getAnimationClass(index));
  }

  /**
   * Trigger slide change with direction and reclass after anim ends
   * @param {string} direction - allowed values: 'left' or 'right'
   */
  public changeSlide(direction: 'left' | 'right'): void {
    this.applyDirectionFlags(direction);
    this.calculateAnimationClasses();

    this.afterAnimation(() => {
      this.resetDirectionFlags();
      this.updateIndices(direction);
      this.slideIndex = this.computeSegment();
      this.calculateAnimationClasses();
    });
  }

  /**
   * Set animation flags depending on slide direction
   * @param {string} dir - allowed values: 'left' or 'right'
   */
  private applyDirectionFlags(dir: 'left' | 'right'): void {
    const isLeft = dir === 'left';
    this.animateleft = isLeft;
    this.animateright = !isLeft;
  }

  /**
   * Reset both animation direction flags to neutral state
   */
  private resetDirectionFlags(): void {
    this.animateleft = false;
    this.animateright = false;
  }

  /**
   * Execute a callback after the animation duration has elapsed
   * @param {() => void} cb - function to run after animation completes
   */
  private afterAnimation(cb: () => void): void {
    setTimeout(cb, this.animMs);
  }

  /**
   * Advance content and indicator indices with wrapping
   * @param {string} dir - slide direction controlling index deltas
   */
  private updateIndices(dir: 'left' | 'right'): void {
    const len = this.languageService.reevaluation.length;
    const slideLen = this.slides.length || 1;

    this.currentIndex = this.wrap(this.currentIndex + (dir === 'left' ? 1 : -1), len);

    this.slideIndex = this.wrap(this.slideIndex + (dir === 'left' ? -1 : 1), slideLen);
  }

  /**
   * Wrap an index value into the valid range [0, len)
   * @param {number} i - index value to normalize
   * @param {number} len - length of the array or range
   * @returns {number} normalized index within bounds
   */
  private wrap(i: number, len: number): number {
    return (i % len + len) % len;
  }

  /**
   * Get reevaluation text at a position relative to the current index
   * @param {number} offset - relative shift from current index
   * @returns {string} text content of the resolved reevaluation entry
   */
  getReevaluationText(offset: number): string {
    const index = (this.currentIndex + offset) % this.languageService.reevaluation.length;
    return this.languageService.reevaluation[index].text;
  }

  /**
   * Get reevaluation author name at a position relative to the current index
   * @param {number} offset - relative shift from current index
   * @returns {string} author name of the resolved reevaluation entry
   */
  getReevaluationName(offset: number): string {
    const index = (this.currentIndex + offset) % this.languageService.reevaluation.length;
    return this.languageService.reevaluation[index].name;
  }

  /**
   * Get the CSS animation class for a given slide index
   * @param {number} index - slot index in the animation mapping
   * @returns {string} CSS class corresponding to the current animation state
   */
  getAnimationClass(index: number): string {
    const map = ANIM_CLASSES[index];
    return map ? map[this.animState()] : '';
  }

  /**
   * Determine current animation state based on direction flags
   * @returns {AnimState} one of 'left', 'right', or 'neutral'
   */
  private animState(): AnimState {
    if (this.animateleft) return 'left';
    if (this.animateright) return 'right';
    return 'neutral';
  }

  /**
   * Check if a given slide index matches the active slide
   * @param {number} index - slide index to check
   * @returns {boolean} true if the index is active, false otherwise
   */
  isActive(index: number): boolean {
    return this.slideIndex === index;
  }

  /**
   * Start swipe tracking on the active (center) slide
   * @param {PointerEvent} ev - pointer event containing position and metadata
   * @param {number} index - slide index, must be the center to activate
   * @returns {void}
   */
  onPointerDown(ev: PointerEvent, index: number): void {
    if (index !== 2 || ev.isPrimary === false) return;
    this.tracking = true;
    this.startX = ev.clientX;
    this.startY = ev.clientY;
    this.startTime = Date.now();
    (ev.target as HTMLElement)?.setPointerCapture?.(ev.pointerId);
  }

  /**
   * Track swipe motion and cancel if vertical movement is too large
   * @param {PointerEvent} ev - current pointer move event
   * @param {number} index - slide index; only active for center
   * @returns {void}
   */
  onPointerMove(ev: PointerEvent, index: number): void {
    if (index !== 2 || !this.tracking) return;
    const dy = Math.abs(ev.clientY - this.startY);
    if (dy > this.swipeRestraint) this.tracking = false;
  }

  /**
   * Finish swipe: measure gesture and, if it qualifies as a swipe, change slide
   * @param {PointerEvent} ev - pointer up event used for measuring the gesture
   * @param {number} index - slide index; only processed for the center (2)
   * @returns {void}
   */
  onPointerUp(ev: PointerEvent, index: number): void {
    if (!this.shouldHandlePointer(index)) return;

    this.endTracking();

    const m = this.measure(ev);

    if (this.isSwipe(m.dx, m.dy, m.dt)) {
      this.changeSlide(this.dirFromDx(m.dx));
    }
  }


  /**
   * Check if pointer input should be processed
   * @param {number} index - slide index; must be the center (2)
   * @returns {boolean} true if tracking is active on the center slide, false otherwise
   */
  private shouldHandlePointer(index: number): boolean {
    return index === 2 && this.tracking;
  }

  /**
   * Stop swipe tracking by resetting the tracking flag
   * @returns {void}
   */
  private endTracking(): void {
    this.tracking = false;
  }

  /**
   * Measure swipe gesture data relative to start position and time
   * @param {PointerEvent} ev - pointer event containing end position
   * @returns {{dx: number, dy: number, dt: number}} horizontal delta, vertical delta, and elapsed time in ms
   */
  private measure(ev: PointerEvent): { dx: number; dy: number; dt: number } {
    const dx = ev.clientX - this.startX;
    const dy = Math.abs(ev.clientY - this.startY);
    const dt = Date.now() - this.startTime;
    return { dx, dy, dt };
  }

  /**
   * Check if the gesture qualifies as a horizontal swipe
   * @param {number} dx - horizontal movement in pixels
   * @param {number} dy - vertical movement in pixels
   * @param {number} dt - elapsed time in milliseconds
   * @returns {boolean} true if movement matches swipe constraints, false otherwise
   */
  private isSwipe(dx: number, dy: number, dt: number): boolean {
    return (
      dt <= this.swipeTime &&
      dy <= this.swipeRestraint &&
      Math.abs(dx) >= this.swipeThreshold
    );
  }

  /**
   * Map horizontal delta to swipe direction
   * @param {number} dx - horizontal movement in pixels (negative = left)
   * @returns {'left' | 'right'} inferred swipe direction
   */
  private dirFromDx(dx: number): 'left' | 'right' {
    return dx < 0 ? 'left' : 'right';
  }

  /**
   * Cancel swipe handling for non-center slides and stop tracking
   * @param {PointerEvent} _ - unused pointer event
   * @param {number} index - slide index; only center (2) would be tracked
   * @returns {void}
   */
  onPointerCancel(_: PointerEvent, index: number): void {
    if (index !== 2) return;
    this.tracking = false;
  }
}
