import { Component } from '@angular/core';
import { Language } from '../../../global/language';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  constructor(
    public languageService: Language
  ) { }
}
