import { Component } from '@angular/core';

@Component({
  selector: 'app-reevaluation',
  standalone: true,
  imports: [],
  templateUrl: './reevaluation.component.html',
  styleUrl: './reevaluation.component.scss'
})

export class ReevaluationComponent {
  preText = [
    { text: "Lorem ipsum Quallenfischen", name: "Maximilian Knabe" },
    { text: "Lorem ipsum Brett form Kopf", name: "Wurzel Wurzeler von Wurzelsen" },
    { text: "Lorem ipsum Moneten", name: "Chram Schon Schingschen" },
    { text: "Lorem ipsum Stein", name: "Patrick Star" },
    { text: "Lorem ipsum Eintopf", name: "Yellow Dragon" },
    { text: "Lorem Knallerbsen", name: "Lira Larum Löffel" }
  ];

  currentIndex = 0;
  animateleft = false;
  animateright = false;

  prevSlide() {
    this.animateleft = true;

    setTimeout(() => {
      this.animateleft = false;

      if (this.currentIndex == this.preText.length - 1) {
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
        this.currentIndex = this.preText.length - 1;
      } else {
        this.currentIndex--;
      }

    }, 1000);
  }

}
