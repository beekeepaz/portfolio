import { Component } from '@angular/core';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {
  public img = {
    leftDefault: '../../assets/img/left-arrow.png',
    leftHover: '../../assets/img/left-arrow-move.png'
  };

  public isLeftHovered = false;

  get leftArrowSrc(): string {
    return this.isLeftHovered ? this.img.leftHover : this.img.leftDefault;
  }

  onLeftEnter(): void { this.isLeftHovered = true; }
  onLeftLeave(): void { this.isLeftHovered = false; }

  back(): void {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.scrollTo({ top: document.documentElement.scrollHeight, left: 0, behavior: 'auto' });
    }
  }
}
