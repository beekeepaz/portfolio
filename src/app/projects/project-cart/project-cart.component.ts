import { Component, Input, Output } from '@angular/core';
import { Carts } from '../../global/carts';
import { Language } from '../../global/language';

@Component({
  selector: 'app-project-cart',
  standalone: true,
  imports: [],
  templateUrl: './project-cart.component.html',
  styleUrl: './project-cart.component.scss'
})
export class ProjectCartComponent {

  constructor(
    public carts: Carts,
    public languageService: Language
  ) { }

  backgroundClick() {
    this.carts.toggleModal();
    this.carts.setFalse();
  }
}
