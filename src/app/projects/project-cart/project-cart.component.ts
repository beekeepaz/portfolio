import { Component, OnInit } from '@angular/core';
import { Carts } from '../../global/carts';
import { Language } from '../../global/language';
import { Router } from '@angular/router';

type CartKey = 'setJoin' | 'setElPolloLoco' | 'setDaBubble';
type LinkKind = 'github' | 'live';

@Component({
  selector: 'app-project-cart',
  standalone: true,
  imports: [],
  templateUrl: './project-cart.component.html',
  styleUrl: './project-cart.component.scss'
})
export class ProjectCartComponent implements OnInit {

  public img = {
    scssCart: '../../../assets/img/scss-cart.png',
    htmlCart: '../../../assets/img/html-cart.png',
    angularCart: '../../../assets/img/Angular-cart.png',
    typeScriptCart: '../../../assets/img/typeScript-cart.png',
    javaScriptCart: '../../../assets/img/javaScript-cart.png',
    firebaseCart: '../../../assets/img/firebase-cart.png',

    joinPreviewCart: '../../assets/img/joinPreview-cart.png',
    polloPreviewCart: '../../assets/img/elPolloPreview-cart.png',
    bubblePreviewCart: '../../assets/img/joinPreview-cart.png',

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

  private readonly order: CartKey[] = ['setJoin', 'setElPolloLoco', 'setDaBubble'];
  private currentIndex = 0;

  private readonly links: Record<CartKey, Record<LinkKind, string | null>> = {
    setJoin: {
      github: 'https://github.com/Simon-Kral/join',
      live: 'https://devcontain.de/join/'
    },
    setElPolloLoco: {
      github: 'https://github.com/beekeepaz/El-pollo-loco',
      live: 'https://devcontain.de/elpollo/'
    },
    setDaBubble: {
      github: 'https://github.com/beekeepaz/da-bubble',
      live: 'https://deine-domain.de/da-bubble/'
    }
  };

  constructor(
    public carts: Carts,
    public languageService: Language,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.syncIndexFromFlags();
  }

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

  private get activeKey(): CartKey {
    return this.order[this.currentIndex];
  }

  goTo(kind: LinkKind): void {
    const url = this.links[this.activeKey][kind];
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  nextProject(): void {
    this.currentIndex = (this.currentIndex + 1) % this.order.length;
    this.applyFlagsFromIndex();
  }

  private syncIndexFromFlags(): void {
    if (this.carts.setElPolloLoco) {
      this.currentIndex = 1;
    } else if (this.carts.setDaBubble) {
      this.currentIndex = 2;
    } else {
      this.currentIndex = 0;
    }
    this.applyFlagsFromIndex();
  }

  private applyFlagsFromIndex(): void {
    this.carts.setJoin = this.currentIndex === 0;
    this.carts.setElPolloLoco = this.currentIndex === 1;
    this.carts.setDaBubble = this.currentIndex === 2;
  }
}
