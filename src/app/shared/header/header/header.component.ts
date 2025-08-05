import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Language } from '../../../global/language';
import { ToggleScroll } from '../../../global/togglescroll';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent implements OnInit {

  readonly languageService = inject(Language);

  constructor(
    private router: Router,
    public scrollbarService: ToggleScroll
  ) { }

  scrollToId(id: string, duration: number = 800) {
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

  switchLanguage(value: string): void {
    this.languageService.toggleValue = value;
  }

  ngOnInit() {
    this.router.navigate(["/"]);
  }

  backgroundClick() {
    this.scrollbarService.isChecked = false;
    setTimeout(() => {
      this.logCheckedStatus();
    }, 100);
  }

  get isChecked(): boolean {
    return this.scrollbarService.isChecked;
  }

  set isChecked(value: boolean) {
    this.scrollbarService.isChecked = value;
    this.logCheckedStatus();
  }

  logCheckedStatus(): void {
    const html = document.documentElement;
    if (this.scrollbarService.isChecked) {
      html.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
    }
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}