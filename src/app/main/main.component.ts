import { Component, VERSION, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header/header.component';
import { Router } from "@angular/router";
import { MarqueeComponent } from '../main/marquee/marquee.component';
import { Language } from '../global/language';

// import { Init } from 'node:v8';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, MarqueeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  name = "Angular " + VERSION.major;
  pointimg = "./../../assets/img/point_green.png";

  /*   currentIndex = 0; */

  constructor(
    private router: Router,
    public languageService: Language
  ) { }

  ngOnInit() {
    this.router.navigate(["/"]);
  }

    scrollToId(id: string) {
      const sliderElement = document.getElementById(id);
      if (sliderElement) {
        const offsetTop = sliderElement.offsetTop;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    }

  scrollToIds(id: string, duration: number = 800) {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime: number | null = null;

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1); // 0 to 1
      const easeInOut = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start + distance * easeInOut);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}
