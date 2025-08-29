import { Component } from '@angular/core';
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
  public img = {

    scssCart: '../../../assets/img/scss-cart.png',
    htmlCart: '../../../assets/img/html-cart.png',
    angularCart: '../../../assets/img/Angular-cart.png',
    typeScriptCart: '../../../assets/img/typeScript-cart.png',
    javaScriptCart: '../../../assets/img/javaScript-cart.png',
    firebaseCart: '../../../assets/img/firebase-cart.png',

    joinPreviewCart: '../../assets/img/joinPreview-cart.png',

    nextFirst: '../../assets/img/arrow-hirizontal.png',
    nextSecond: '../../assets/img/arrow-horizontale-moved.png',

    closeDefault: '../../../assets/img/close_small.png',
    closeHover: '../../../assets/img/close.png',

    arrowBtnDefault: '../../../assets/img/arrow_btn.png',
    arrowBtnHover: '../../../assets/img/arrow_btn_out.png'
  };

  public isNextHovered = false;
  public isCloseHovered = false;

  public arrowBtnHover: boolean[] = [false, false];

  constructor(
    public carts: Carts,
    public languageService: Language,
    private router: Router
  ) { }

  onNextEnter(): void { this.isNextHovered = true; }
  onNextLeave(): void { this.isNextHovered = false; }

  onCloseEnter(): void { this.isCloseHovered = true; }
  onCloseLeave(): void { this.isCloseHovered = false; }

  onArrowBtnEnter(idx: number): void { this.arrowBtnHover[idx] = true; }
  onArrowBtnLeave(idx: number): void { this.arrowBtnHover[idx] = false; }

  get closeIcon(): string {
    return this.isCloseHovered ? this.img.closeHover : this.img.closeDefault;
  }

  arrowBtnSrc(idx: number): string {
    return this.arrowBtnHover[idx] ? this.img.arrowBtnHover : this.img.arrowBtnDefault;
  }

  get showNextFirst(): boolean { return !this.isNextHovered; }
  get showNextSecond(): boolean { return this.isNextHovered; }

  close(): void {
    this.carts.toggleModal();
    this.carts.setFalse();
    setTimeout(() => this.logCheckedStatus(), 100);
  }

  private logCheckedStatus(): void {
    const html = document.documentElement;
    html.classList.remove('no-scroll');
  }

  goToPage(): void {
    window.open('https://github.com/Simon-Kral/join', '_blank', 'noopener,noreferrer');
  }
}
