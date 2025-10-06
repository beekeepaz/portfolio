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

  private readonly order: CartKey[] = ['setJoin', 'setElPolloLoco'];
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

  /**
   * Initialize view state from service flags
   */
  ngOnInit(): void {
    this.syncIndexFromFlags();
  }

  /**
   * Show “next” hover frame
   */
  onNextEnter(): void {
    this.isNextHovered = true;
  }

  /**
   * Hide “next” hover frame
   */
  onNextLeave(): void {
    this.isNextHovered = false;
  }

  /**
   * Set close icon to hover state
   */
  onCloseEnter(): void {
    this.isCloseHovered = true;
  }

  /**
   * Reset close icon hover state
   */
  onCloseLeave(): void {
    this.isCloseHovered = false;
  }

  /**
   * Set arrow button hover state by index
   * @param {number} idx - arrow button index (0 or 1)
   */
  onArrowBtnEnter(idx: number): void {
    this.arrowBtnHover[idx] = true;
  }

  /**
   * Reset arrow button hover state by index
   * @param {number} idx - arrow button index (0 or 1)
   */
  onArrowBtnLeave(idx: number): void {
    this.arrowBtnHover[idx] = false;
  }

  /**
   * Get close icon source based on hover state
   * @returns {string} image URL for the close icon
   */
  get closeIcon(): string {
    return this.isCloseHovered ? this.img.closeHover : this.img.closeDefault;
  }

  /**
   * Get arrow image by index with hover fallback
   * @param {number} idx - arrow button index (0 or 1)
   * @returns {string} image URL for the arrow button
   */
  arrowBtnSrc(idx: number): string {
    return this.arrowBtnHover[idx] ? this.img.arrowBtnHover : this.img.arrowBtnDefault;
  }

  /**
   * Whether to show the default “next” image (non-hover)
   * @returns {boolean} true when not hovered
   */
  get showNextFirst(): boolean {
    return !this.isNextHovered;
  }

  /**
   * Whether to show the hovered “next” image
   * @returns {boolean} true when hovered
   */
  get showNextSecond(): boolean {
    return this.isNextHovered;
  }

  /**
   * Close modal and clear flags / remove page no-scroll class
   */
  close(): void {
    this.carts.toggleModal();
    this.carts.setFalse();
    setTimeout(() => this.logCheckedStatus(), 100);
  }

  /**
   * Remove 'no-scroll' class from <html> element
   */
  private logCheckedStatus(): void {
    const html = document.documentElement;
    html.classList.remove('no-scroll');
  }

  /**
   * Get active project key based on current index
   * @returns {CartKey} the active project key
   */
  private get activeKey(): CartKey {
    return this.order[this.currentIndex];
  }

  /**
   * Open the active project's GitHub or live link in a new tab
   * @param {'github'|'live'} kind - link kind to open
   * @returns {void}
   */
  goTo(kind: LinkKind): void {
    const url = this.links[this.activeKey][kind];
    if (!url) return;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  /**
   * Advance to the next project and sync service flags
   */
  nextProject(): void {
    this.currentIndex = (this.currentIndex + 1) % this.order.length;
    this.applyFlagsFromIndex();
  }

  /**
   * Read service flags to set the current index
   */
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

  /**
   * Reflect current index back into the carts service flags
   */
  private applyFlagsFromIndex(): void {
    this.carts.setJoin = this.currentIndex === 0;
    this.carts.setElPolloLoco = this.currentIndex === 1;
    this.carts.setDaBubble = this.currentIndex === 2;
  }
}
