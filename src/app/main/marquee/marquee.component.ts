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

  private animationFrameId = 0;
  private offset = 0;
  private speed = 6.5;

  readonly languageService = inject(Language);

  // Dummy-Daten für Sprachumschaltung
  readonly testLangEN = {
    bannertxta: 'Welcome',
    bannertxtb: 'We innovate',
    bannertxtc: 'Contact us',
    bannertxtd: 'Your success'
  };

  readonly testLangDE = {
    bannertxta: 'Willkommen',
    bannertxtb: 'Wir innovieren',
    bannertxtc: 'Kontaktieren Sie uns',
    bannertxtd: 'Ihr Erfolg'
  };

  bannerTextArrayDynamic: { text: string }[] = [];

  ngOnInit(): void {
    this.updateBannerText();
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
    this.updateBannerText();
  }

  public updateBannerText(): void {
    const lang = this.toggleValue === 'true' ? this.testLangDE : this.testLangEN;

    this.bannerTextArrayDynamic = [
      { text: lang.bannertxta },
      { text: lang.bannertxtb },
      { text: lang.bannertxtc },
      { text: lang.bannertxtd },
      { text: lang.bannertxta },
      { text: lang.bannertxtb },
      { text: lang.bannertxtc },
      { text: lang.bannertxtd }
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
