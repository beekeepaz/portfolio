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

  getAnimationClass(index: number): string {
    if (index === 0 && this.animateright === false && this.animateleft === false) {
      console.log(0.0);
      return 'd-none';
    } else if (index === 0 && this.animateright === true && this.animateleft === false) {
      console.log(0.1);
      return 'single-comment-field preview left-in';
    } else if (index === 0 && this.animateright === false && this.animateleft === true) {
      console.log(0.2);
      return 'd-none';
    }

    if (index === 1 && this.animateleft === true) {
      // console.log(1.0);
      return 'single-comment-field preview left';
    } else if (index === 1 && this.animateright === true) {
      // console.log(1.1);
      return 'single-comment-field preview left-right';
    } else if (index === 1 && this.animateleft === false && this.animateright === false) {
      // console.log(1.2);
      return 'single-comment-field preview';
    }

    if (index === 2 && this.animateleft === true) {
      // console.log(2.0);
      return 'single-comment-field mid-left';
    } else if (index === 2 && this.animateright === true) {
      // console.log(2.1);
      return 'single-comment-field mid-right';
    } else if (index === 2) {
      // console.log(2.2);
      return 'single-comment-field show-mid-color';
    }

    if (index === 3 && this.animateleft === true) {
      // console.log(3.0);
      return 'single-comment-field preview right';
    } else if (index === 3 && this.animateright === true) {
      // console.log(3.1);
      return 'single-comment-field preview right-right';
    } else if (index === 3) {
      // console.log(3.2);
      return 'single-comment-field preview';
    }

    if (index === 4 && this.animateleft === false && this.animateright === false) {
      console.log(4.0);
      return 'd-none';
    } else if (index === 4 && this.animateleft === true && this.animateright === false) {
      console.log(4.1);
      return 'single-comment-field preview right-in';
    } else if(index === 4 && this.animateleft === false && this.animateright === true) {
      console.log(4.2);
      return 'd-none';
    }

    console.log('No condition matched');
    return '';
  }
}