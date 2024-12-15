import { Component } from '@angular/core';
import { Language } from '../global/language';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

    constructor(
      public languageService: Language
    ) { }
  
    get toggleValue(): string {
      return this.languageService.toggleValue;
    }
  
    set toggleValue(value: string) {
      this.languageService.toggleValue = value;
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
}
