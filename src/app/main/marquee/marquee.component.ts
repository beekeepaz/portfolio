import {
  Component,
  ViewChild,
  ElementRef,
  AfterViewInit,
  OnDestroy,
  inject
} from '@angular/core';
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

  ngOnInit(): void {
    this.langSub = this.languageService.toggleValue$.subscribe(() => {
      this.updateBannerText();
    });
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
    if (this.langSub) this.langSub.unsubscribe();
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
    this.updateBannerText();
  }

  public updateBannerText(): void {
    const header = this.languageService.currentHeader;

    this.bannerTextArrayDynamic = [
      { text: header.bannertxta },
      { text: header.bannertxtb },
      { text: header.bannertxtc },
      { text: header.bannertxtd },
      { text: header.bannertxta },
      { text: header.bannertxtb },
      { text: header.bannertxtc },
      { text: header.bannertxtd }
    ];
  }

  private animate(): void {
    const track = this.trackRef.nativeElement;

    const step = () => {
      this.offset -= this.speed;

      const trackWidth = track.scrollWidth;
      if (Math.abs(this.offset) >= trackWidth / 2) {
        this.offset = 0;
      }

      track.style.transform = `translateX(${this.offset}px)`;
      this.animationFrameId = requestAnimationFrame(step);
    };

    this.animationFrameId = requestAnimationFrame(step);
  }
}
