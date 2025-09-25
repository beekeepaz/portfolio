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

  // Subscribe to language changes and refresh banner text
  ngOnInit(): void {
    this.langSub = this.languageService.toggleValue$.subscribe(() => {
      this.updateBannerText();
    });
  }

  // Start marquee animation after view is ready
  ngAfterViewInit(): void {
    this.animate();
  }

  // Stop animation and clean subscriptions
  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    if (this.langSub) this.langSub.unsubscribe();
  }

  // Read current language toggle
  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  // Update language toggle and refresh banner text
  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
    this.updateBannerText();
  }

  // Build duplicated banner items for seamless loop
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

  // Drive per-frame offset updates using rAF
  private animate(): void {
    const track = this.trackRef.nativeElement as HTMLElement;

    const step = () => {
      this.offset = this.nextOffset(track.scrollWidth, this.offset, this.speed);
      this.applyTransform(track, this.offset);
    };

    this.animationFrameId = this.startRafLoop(step);
  }

  // Start a requestAnimationFrame loop with given step
  private startRafLoop(step: () => void): number {
    const loop = () => {
      step();
      this.animationFrameId = requestAnimationFrame(loop);
    };
    return requestAnimationFrame(loop);
  }

  // Apply horizontal translate to the track
  private applyTransform(el: HTMLElement, offset: number): void {
    el.style.transform = `translateX(${offset}px)`;
  }

  // Compute next offset and wrap at half track width
  private nextOffset(trackWidth: number, offset: number, speed: number): number {
    const next = offset - speed;
    return Math.abs(next) >= trackWidth / 2 ? 0 : next;
  }
}
