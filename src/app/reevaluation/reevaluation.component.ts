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
    if (index === 0 && this.animateright === true) return 'single-comment-field preview left-in';
    if (index === 1 && this.animateleft === true) return 'single-comment-field preview left';
    else if (index === 1 && this.animateright === true) return 'single-comment-field preview left-right';
    else if (index === 1 && this.animateleft === false && this.animateright === false) return 'single-comment-field preview';
    if (index === 2 && this.animateleft === true) return 'single-comment-field mid-left';
    else if (index === 2 && this.animateright === true) return 'single-comment-field mid-right';
    else if (index === 2) return 'single-comment-field show-mid-color';
    if (index === 3 && this.animateleft === true) return 'single-comment-field preview right';
    else if (index === 3 && this.animateright === true) return 'single-comment-field preview right-right';
    else if (index === 3) return 'single-comment-field preview';
    if (index === 4 && this.animateleft === true) return 'single-comment-field preview right-in';
    return '';
  }

  //   if(animateright === true)
  //     single-comment-field preview left-in

  //   if(animateleft === true)
  //     single-comment-field preview left

  //   else if(animateleft === false && animateright === true)
  //     single-comment-field preview left-right

  //   else if(animateleft === false && animateright === false)
  //     single-comment-field preview

  //   if(animateleft === true)
  //     single-comment-field mid-left

  //   else if (animateright === true)
  //     single-comment-field mid-right

  //   else ()
  //     single-comment-field show-mid-color

  //     if(animateleft === true)
  //       single-comment-field preview right

  //     else if(animateright === true)
  //       single-comment-field preview right-right

  //     else
  //       single-comment-field preview

  //       if(animateleft === true)
  //         single-comment-field preview right-in
  // 

}