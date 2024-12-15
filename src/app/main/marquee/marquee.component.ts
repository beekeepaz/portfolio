import { Component } from '@angular/core';
import { Language } from '../../global/language';

@Component({
  selector: 'app-marquee',
  standalone: true,
  imports: [],
  templateUrl: './marquee.component.html',
  styleUrl: './marquee.component.scss'
})
export class MarqueeComponent {
  pointimg = "./../../assets/img/point_green.png";

  constructor(
    public languageService: Language
  ) { }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}
