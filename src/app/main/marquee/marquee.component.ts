import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject
} from '@angular/core';
import { Language } from '../../global/language';

@Component({
  selector: 'app-marquee',
  standalone: true,
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent implements AfterViewInit, OnDestroy {
  pointimg = './../../assets/img/point_green.png';

  @ViewChild('track') trackRef!: ElementRef<HTMLDivElement>;
  @ViewChild('marquee') marqueeRef!: ElementRef<HTMLDivElement>;

  private animationFrameId = 0;
  private offset = 0;
  private speed = 2.5; // px pro Frame

  readonly languageService = inject(Language);

  bannerTextArray = [
    { text: this.languageService.currentHeader.bannertxta },
    { text: this.languageService.currentHeader.bannertxtb },
    { text: this.languageService.currentHeader.bannertxtc },
    { text: this.languageService.currentHeader.bannertxtd },
    { text: this.languageService.currentHeader.bannertxta },
    { text: this.languageService.currentHeader.bannertxtb },
    { text: this.languageService.currentHeader.bannertxtc },
    { text: this.languageService.currentHeader.bannertxtd }
  ];

  ngAfterViewInit(): void {
    const track = this.trackRef.nativeElement;
    const clone = track.cloneNode(true) as HTMLElement;
    track.appendChild(clone);
    this.animate();
  }

  private animate(): void {
    const track = this.trackRef.nativeElement;

    const step = () => {
      this.offset -= this.speed;

      const maxScroll = track.scrollWidth / 2;
      if (Math.abs(this.offset) >= maxScroll) {
        this.offset = 0;
      }

      track.style.transform = `translateX(${this.offset}px)`;
      this.animationFrameId = requestAnimationFrame(step);
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}
