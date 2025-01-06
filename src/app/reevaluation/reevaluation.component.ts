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
  // preText = [
  //   { text: "Lorem ipsum Quallenfischen", name: "Maximilian Knabe" },
  //   { text: "Lorem ipsum Brett form Kopf", name: "Wurzel Wurzeler von Wurzelsen" },
  //   { text: "Lorem ipsum Moneten", name: "Chram Schon Schingschen" },
  //   { text: "Lorem ipsum Stein", name: "Patrick Star" },
  //   { text: "Lorem ipsum Eintopf", name: "Yellow Dragon" },
  //   { text: "Lorem Knallerbsen", name: "Lira Larum Löffel" }
  // ];

  currentIndex = 0;
  animateleft = false;
  animateright = false;

  animationClasses: string[] = [];

  constructor(
    public languageService: Language
  ) { }

  ngOnInit(): void {
    this.calculateAnimationClasses();
  }

  calculateAnimationClasses(): void {
    this.animationClasses = [0, 1, 2, 3, 4].map(index => this.getAnimationClass(index));
  }

  prevSlide() {
    this.animateleft = true;
    this.calculateAnimationClasses();

    setTimeout(() => {
      this.animateleft = false;

      if (this.currentIndex == this.languageService.reevaluation.length - 1) {
        this.currentIndex = 0;
        this.calculateAnimationClasses();
      } else {
        this.currentIndex++;
        this.calculateAnimationClasses();
      }

    }, 1000);
  }

  nextSlide() {
    this.animateright = true;
    this.calculateAnimationClasses();

    setTimeout(() => {
      this.animateright = false;

      if (this.currentIndex == 0) {
        this.currentIndex = this.languageService.reevaluation.length - 1;
        this.calculateAnimationClasses();
      } else {
        this.currentIndex--;
        this.calculateAnimationClasses();
      }

    }, 1000);
  }

  getReevaluationText(offset: number): string {
    const index = (this.currentIndex + offset) % this.languageService.reevaluation.length;
    return this.languageService.reevaluation[index].text;
  }

  getReevaluationName(offset: number): string {
    const index = (this.currentIndex + offset) % this.languageService.reevaluation.length;
    return this.languageService.reevaluation[index].name;
  }

  // Funktion 1: Animationen für Index 0
  getAnimationIndex0(): string {
    return !this.animateright && !this.animateleft
      ? 'd-none'
      : this.animateright && !this.animateleft
        ? 'single-comment-field preview left-in'
        : !this.animateright && this.animateleft
          ? 'd-none'
          : '';
  }

  // Funktion 2: Animationen für Index 1
  getAnimationIndex1(): string {
    return this.animateleft
      ? 'single-comment-field preview left'
      : this.animateright
        ? 'single-comment-field preview left-right'
        : !this.animateleft && !this.animateright
          ? 'single-comment-field preview'
          : '';
  }

  // Funktion 3: Animationen für Index 2
  getAnimationIndex2(): string {
    return this.animateleft
      ? 'single-comment-field mid-left'
      : this.animateright
        ? 'single-comment-field mid-right'
        : 'single-comment-field show-mid-color';
  }

  // Funktion 4: Animationen für Index 3
  getAnimationIndex3(): string {
    return this.animateleft
      ? 'single-comment-field preview right'
      : this.animateright
        ? 'single-comment-field preview right-right'
        : 'single-comment-field preview';
  }

  // Funktion 5: Animationen für Index 4
  getAnimationIndex4(): string {
    return !this.animateleft && !this.animateright
      ? 'd-none'
      : this.animateleft && !this.animateright
        ? 'single-comment-field preview right-in'
        : !this.animateleft && this.animateright
          ? 'd-none'
          : '';
  }

  // Hauptfunktion, um die richtige Subfunktion aufzurufen
  getAnimationClass(index: number): string {
    switch (index) {
      case 0:
        return this.getAnimationIndex0();
      case 1:
        return this.getAnimationIndex1();
      case 2:
        return this.getAnimationIndex2();
      case 3:
        return this.getAnimationIndex3();
      case 4:
        return this.getAnimationIndex4();
      default:
        console.log('No condition matched');
        return '';
    }
  }

}