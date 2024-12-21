import { Component, Input, Output } from '@angular/core';
import { Carts } from '../../global/carts';
import { Language } from '../../global/language';
import { Router } from '@angular/router';

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
    public languageService: Language,
    private router: Router
  ) { }

  close() {
    this.carts.toggleModal();
    this.carts.setFalse();
    setTimeout(() => {
      this.logCheckedStatus();
    }, 100);
  }

  logCheckedStatus(): void {
    const html = document.documentElement;
    html.classList.remove('no-scroll');
  }

  goToPage() {
    window.open('https://github.com/Simon-Kral/join', '_blank', 'noopener,noreferrer');
  }
 
  
  // goToPage() {
  //   window.location.href = 'https://github.com/Simon-Kral/join';
  //   this.router.navigateByUrl('https://github.com/Simon-Kral/join');
  // }
}
