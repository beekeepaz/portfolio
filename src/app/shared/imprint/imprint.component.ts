import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  standalone: true,
  imports: [],
  templateUrl: './imprint.component.html',
  styleUrl: './imprint.component.scss'
})
export class ImprintComponent {
  public img = {
    leftDefault: '../../assets/img/left-arrow.png',
    leftHover: '../../assets/img/left-arrow-move.png'
  };

  public isLeftHovered = false;

  get leftArrowSrc(): string {
    return this.isLeftHovered ? this.img.leftHover : this.img.leftDefault;
  }

  /**
 * Set left arrow hover state to active
 */
  onLeftEnter(): void {
    this.isLeftHovered = true;
  }

  /**
 * Reset left arrow hover state to inactive
 */
  onLeftLeave(): void {
    this.isLeftHovered = false;
  }

  /**
 * Navigate back in browser history if possible, otherwise scroll to bottom of page
 */
  back(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, left: 0, behavior: 'auto' });
    }
  }
}
