import { Component } from '@angular/core';
import { Language } from '../global/language';
import { CommonModule } from '@angular/common';

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

  get leftArrowSrc(): string {
    return this.isLeftHovered ? this.img.leftHover : this.img.leftDefault;
  }
  get rightArrowSrc(): string {
    return this.isRightHovered ? this.img.rightHover : this.img.rightDefault;
  }

  onLeftEnter(): void { this.isLeftHovered = true; }
  onLeftLeave(): void { this.isLeftHovered = false; }
  onRightEnter(): void { this.isRightHovered = true; }
  onRightLeave(): void { this.isRightHovered = false; }

  animationDuration = '800ms';
  animationTiming = 'ease-in-out';

  private get animMs(): number {
    const n = Number(this.animationDuration.replace('ms', ''));
    return isNaN(n) ? 1000 : n;
  }

  currentIndex = 0;
  animateleft = false;
  animateright = false;

  animationClasses: string[] = [];
  slides: string[] = [];
  slideIndex = 0;

  constructor(public languageService: Language) { }

  ngOnInit(): void {
    this.slides = Array(3).fill('');
    this.slideIndex = this.computeSegment();
    this.calculateAnimationClasses();
  }

  // --- NEU: Segmentberechnung (0: Anfang, 1: Mitte, 2: Ende)
  private computeSegment(): number {
    const n = this.languageService.reevaluation.length || 1;
    // Verteile currentIndex gleichmäßig auf 3 Segmente
    // floor((i * 3) / n) → 0,1,2   (mit Clamp)
    const seg = Math.floor((this.currentIndex * 3) / n);
    return Math.max(0, Math.min(2, seg));
  }

  calculateAnimationClasses(): void {
    this.animationClasses = [0, 1, 2, 3, 4].map(index => this.getAnimationClass(index));
  }

  changeSlide(direction: 'left' | 'right'): void {
    const isLeft = direction === 'left';
    this.animateleft = isLeft;
    this.animateright = !isLeft;
    this.calculateAnimationClasses();

    setTimeout(() => {
      this.animateleft = false;
      this.animateright = false;

      const length = this.languageService.reevaluation.length;

      if (isLeft) {
        this.currentIndex = (this.currentIndex + 1) % length;
        this.slideIndex = (this.slideIndex - 1 + this.slides.length) % this.slides.length;
      } else {
        this.currentIndex = (this.currentIndex - 1 + length) % length;
        this.slideIndex = (this.slideIndex + 1) % this.slides.length;
      }

      this.slideIndex = this.computeSegment();

      this.calculateAnimationClasses();
    }, this.animMs);
  }

  getReevaluationText(offset: number): string {
    const index = (this.currentIndex + offset) % this.languageService.reevaluation.length;
    return this.languageService.reevaluation[index].text;
  }

  getReevaluationName(offset: number): string {
    const index = (this.currentIndex + offset) % this.languageService.reevaluation.length;
    return this.languageService.reevaluation[index].name;
  }

  getAnimationClass(index: number): string {
    const baseClasses: Record<number, { neutral: string; left: string; right: string }> = {
      0: { neutral: 'd-none', left: 'd-none', right: 'single-comment-field preview left-in' },
      1: { neutral: 'single-comment-field preview', left: 'single-comment-field preview left', right: 'single-comment-field preview left-right' },
      2: { neutral: 'single-comment-field show-mid-color', left: 'single-comment-field mid-left', right: 'single-comment-field mid-right' },
      3: { neutral: 'single-comment-field preview', left: 'single-comment-field preview right', right: 'single-comment-field preview right-right' },
      4: { neutral: 'd-none', left: 'single-comment-field preview right-in', right: 'd-none' }
    };

    if (!this.animateleft && !this.animateright) return baseClasses[index]?.neutral || '';
    if (this.animateleft) return baseClasses[index]?.left || '';
    if (this.animateright) return baseClasses[index]?.right || '';
    return '';
  }

  isActive(index: number): boolean {
    return this.slideIndex === index;
  }

  onPointerDown(ev: PointerEvent, index: number): void {
    if (index !== 2 || ev.isPrimary === false) return;
    this.tracking = true;
    this.startX = ev.clientX;
    this.startY = ev.clientY;
    this.startTime = Date.now();
    (ev.target as HTMLElement)?.setPointerCapture?.(ev.pointerId);
  }

  onPointerMove(ev: PointerEvent, index: number): void {
    if (index !== 2 || !this.tracking) return;
    const dy = Math.abs(ev.clientY - this.startY);
    if (dy > this.swipeRestraint) this.tracking = false;
  }

  onPointerUp(ev: PointerEvent, index: number): void {
    if (index !== 2 || !this.tracking) return;
    this.tracking = false;

    const dx = ev.clientX - this.startX;
    const dy = Math.abs(ev.clientY - this.startY);
    const dt = Date.now() - this.startTime;

    if (dt <= this.swipeTime && dy <= this.swipeRestraint && Math.abs(dx) >= this.swipeThreshold) {
      if (dx < 0) this.changeSlide('left');
      else this.changeSlide('right');
    }
  }

  onPointerCancel(_: PointerEvent, index: number): void {
    if (index !== 2) return;
    this.tracking = false;
  }
}
