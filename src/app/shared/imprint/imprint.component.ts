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

  onLeftEnter(): void {
    this.isLeftHovered = true;
  }

  onLeftLeave(): void {
    this.isLeftHovered = false;
  }

  back(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, left: 0, behavior: 'auto' });
    }
  }
}
