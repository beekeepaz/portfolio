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

  slideIndex: number = 0;

  constructor(
    public languageService: Language
  ) { }

  ngOnInit(): void {
    this.slides = Array(this.languageService.reevaluation.length).fill('');
    this.calculateAnimationClasses();
  }

  calculateAnimationClasses(): void {
    this.animationClasses = [0, 1, 2, 3, 4].map(index => this.getAnimationClass(index));
  }

  changeSlide(direction: 'left' | 'right') {
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
    const baseClasses: any = {
      0: { neutral: 'd-none', left: 'd-none', right: 'single-comment-field preview left-in' },
      1: { neutral: 'single-comment-field preview', left: 'single-comment-field preview left', right: 'single-comment-field preview left-right' },
      2: { neutral: 'single-comment-field show-mid-color', left: 'single-comment-field mid-left', right: 'single-comment-field mid-right' },
      3: { neutral: 'single-comment-field preview', left: 'single-comment-field preview right', right: 'single-comment-field preview right-right' },
      4: { neutral: 'd-none', left: 'single-comment-field preview right-in', right: 'd-none' }
    };

    if (!this.animateleft && !this.animateright) {
      return baseClasses[index]?.neutral || '';
    }
    if (this.animateleft) {
      return baseClasses[index]?.left || '';
    }
    if (this.animateright) {
      return baseClasses[index]?.right || '';
    }
    return '';
  }

  isActive(index: number): boolean {
    return this.slideIndex === index;
  }

}