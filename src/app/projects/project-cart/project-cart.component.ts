import { Component, Input, Output } from '@angular/core';
import { Carts } from '../../global/carts';

@Component({
  selector: 'app-project-cart',
  standalone: true,
  imports: [],
  templateUrl: './project-cart.component.html',
  styleUrl: './project-cart.component.scss'
})
export class ProjectCartComponent {

  constructor(public carts: Carts) { }

  backgroundClick() {
    this.carts.toggleModal();
    this.carts.setFalse();
  }
}
