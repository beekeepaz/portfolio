import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { MarqueeComponent } from '../main/marquee/marquee.component';
import { Language } from '../global/language';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MarqueeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  name = "Angular " + VERSION.major;

  githubDefault = 'assets/img/github_green.png';
  githubHover = 'assets/img/github_white.png';

  mailDefault = 'assets/img/mail_green.png';
  mailHover = 'assets/img/mail_white.png';

  currentGithub = this.githubDefault;
  currentMail = this.mailDefault;

  private animationFrameId = 0;
  private offset = 0;
  private speed = 0.15;
  private direction: number = 1;

  @ViewChild('arrowtrack') trackRef!: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    public languageService: Language
  ) { }

  /**
   * Lifecycle hook: navigate to the root route on init
   */
  ngOnInit(): void {
    this.router.navigate(["/"]);
  }

  /**
   * Lifecycle hook: start arrow animation after view init
   */
  ngAfterViewInit(): void {
    this.animate();
  }

  /**
   * Smoothly scroll the window to an element by ID with easing
   * @param {string} id - target element ID
   * @param {number} [duration=800] - animation duration in ms
   * @returns {void}
   */
  public scrollToId(id: string, duration = 800): void {
    const target = document.getElementById(id);
    if (!target) return;

    const { start, distance } = this.scrollMetrics(target);
    this.rafTween(duration, t => {
      window.scrollTo(0, start + distance * this.easeInOut(t));
    });
  }

  /**
   * Compute current scroll position and distance to a target element
   * @param {HTMLElement} el - element to measure
   * @returns {{start: number, distance: number}} current scrollY and delta to element
   */
  private scrollMetrics(el: HTMLElement): { start: number; distance: number } {
    const start = window.pageYOffset;
    const end = el.getBoundingClientRect().top + start;
    return { start, distance: end - start };
  }

  /**
   * Quadratic ease-in-out mapping (0..1 -> 0..1)
   * @param {number} t - normalized time in [0,1]
   * @returns {number} eased value in [0,1]
   */
  private easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  /**
   * requestAnimationFrame tween helper running for a fixed duration
   * @param {number} duration - duration in ms
   * @param {(t: number) => void} frame - callback receiving progress (0..1)
   */
  private rafTween(duration: number, frame: (t: number) => void): void {
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      frame(t);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /**
   * Hover handler: switch GitHub icon to hover variant
   */
  onGithubEnter(): void {
    this.currentGithub = this.githubHover;
  }

  /**
   * Hover handler: restore GitHub icon to default
   */
  onGithubLeave(): void {
    this.currentGithub = this.githubDefault;
  }

  /**
   * Hover handler: switch mail icon to hover variant
   */
  onMailEnter(): void {
    this.currentMail = this.mailHover;
  }

  /**
   * Hover handler: restore mail icon to default
   */
  onMailLeave(): void {
    this.currentMail = this.mailDefault;
  }

  /**
   * Start vertical ping-pong animation for the arrow track
   * @returns {void}
   */
  private animate(): void {
    const track = this.trackRef.nativeElement as HTMLElement;

    const step = () => {
      const max = this.maxOffset(track.scrollWidth, this.speed);
      [this.offset, this.direction] = this.pingPong(this.offset, this.direction as 1 | -1, this.speed, 0, max);
      this.applyTransformY(track, this.offset);
      this.animationFrameId = requestAnimationFrame(step);
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

  /**
   * Calculate maximum vertical offset for the ping-pong motion
   * @param {number} trackWidth - width of the track element
   * @param {number} speed - animation speed
   * @returns {number} maximum offset in px
   */
  private maxOffset(trackWidth: number, speed: number): number {
    return trackWidth / 2 - speed;
  }

  /**
   * Move a value between [min,max] and reverse direction at bounds
   * @param {number} offset - current position
   * @param {1|-1} dir - current direction
   * @param {number} speed - step size
   * @param {number} min - lower bound
   * @param {number} max - upper bound
   * @returns {[number, 1|-1]} next position and (possibly flipped) direction
   */
  private pingPong(offset: number, dir: 1 | -1, speed: number, min: number, max: number): [number, 1 | -1] {
    let next = offset + speed * dir;
    if (next >= max || next <= min) {
      dir = dir === 1 ? -1 : 1;
      next = Math.max(min, Math.min(max, next));
    }
    return [next, dir];
  }

  /**
   * Apply a vertical translate transform to an element
   * @param {HTMLElement} el - element to transform
   * @param {number} y - translateY in pixels
   */
  private applyTransformY(el: HTMLElement, y: number): void {
    el.style.transform = `translateY(${y}px)`;
  }

  /**
   * Read the current language toggle value
   * @returns {string} current language toggle
   */
  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  /**
   * Update the current language toggle value
   * @param {string} value - new language toggle
   */
  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}
