import { Component, ViewChild, ElementRef, AfterViewInit, OnDestroy, inject } from '@angular/core';
import { Language } from '../../global/language';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent implements AfterViewInit, OnDestroy {
  pointimg = './../../assets/img/point_green.png';

  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;

  private animationFrameId = 0;
  private offset = 0;
  private speed = 3.5;

  readonly languageService = inject(Language);
  private langSub!: Subscription;

  bannerTextArrayDynamic: { text: string }[] = [];

  /**
   * Subscribe to language changes and refresh banner text
   */
  ngOnInit(): void {
    this.langSub = this.languageService.toggleValue$.subscribe(() => {
      this.updateBannerText();
    });
  }

  /**
   * Start marquee animation after view is ready
   */
  ngAfterViewInit(): void {
    this.animate();
  }

  /**
   * Stop animation and clean up subscriptions
   */
  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    if (this.langSub) this.langSub.unsubscribe();
  }

  /**
   * Read current language toggle
   * @returns {string} current toggle value
   */
  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  /**
   * Update language toggle and refresh banner text
   * @param {string} value - new language toggle value
   */
  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
    this.updateBannerText();
  }

  /**
   * Build duplicated banner items for a seamless scrolling loop
   */
  public updateBannerText(): void {
    const header = this.languageService.currentHeader;

    const baseArray = [
      { text: header.bannertxta },
      { text: header.bannertxtb },
      { text: header.bannertxtc },
      { text: header.bannertxtd }
    ];

    this.bannerTextArrayDynamic = [...baseArray, ...baseArray];
  }

  /**
   * Drive per-frame offset updates using requestAnimationFrame
   */
  private animate(): void {
    const track = this.trackRef.nativeElement as HTMLElement;

    const step = () => {
      this.offset = this.nextOffset(track.scrollWidth, this.offset, this.speed);
      this.applyTransform(track, this.offset);
    };

    this.animationFrameId = this.startRafLoop(step);
  }

  /**
   * Start a continuous requestAnimationFrame loop
   * @param {() => void} step - function executed every frame
   * @returns {number} rAF id of the initial request
   */
  private startRafLoop(step: () => void): number {
    const loop = () => {
      step();
      this.animationFrameId = requestAnimationFrame(loop);
    };
    return requestAnimationFrame(loop);
  }

  /**
   * Apply horizontal translate to the track element
   * @param {HTMLElement} el - element to transform
   * @param {number} offset - translateX value in pixels
   */
  private applyTransform(el: HTMLElement, offset: number): void {
    el.style.transform = `translateX(${offset}px)`;
  }

  /**
   * Compute next horizontal offset and wrap at half the track width
   * (since content is duplicated, half width equals one full cycle)
   * @param {number} trackWidth - total scroll width of the track
   * @param {number} offset - current offset
   * @param {number} speed - step size per frame
   * @returns {number} next offset value
   */
  private nextOffset(trackWidth: number, offset: number, speed: number): number {
    const next = offset - speed;
    return Math.abs(next) >= trackWidth / 2 ? 0 : next;
  }
}
