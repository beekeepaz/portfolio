import { Component } from '@angular/core';
import { Language } from '../global/language';

@Component({
  selector: 'app-reevaluation',
  standalone: true,
  imports: [],
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

  constructor(
    public languageService: Language
  ) { }

  prevSlide() {
    this.animateleft = true;

    setTimeout(() => {
      this.animateleft = false;

      if (this.currentIndex == this.languageService.reevaluation.length - 1) {
        this.currentIndex = 0;
      } else {
        this.currentIndex++;
      }

    }, 1000);
  }

  nextSlide() {
    this.animateright = true;

    setTimeout(() => {
      this.animateright = false;

      if (this.currentIndex == 0) {
        this.currentIndex = this.languageService.reevaluation.length - 1;
      } else {
        this.currentIndex--;
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

  getAnimationClass(index: number): string {
    if (index === 0) return this.animateright ? 'left-in' : 'left';
    if (index === 1) return this.animateleft ? 'mid-left' : 'mid-right';
    if (index === 2) return 'show-mid-color';
    if (index === 3) return this.animateright ? 'right-right' : 'right';
    if (index === 4) return 'right-in';
    return '';
  }

}