import { Component } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router: Router) { }

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
   * Scroll to bottom of page
   */
  back(): void {
    this.router.navigate(['/'], { replaceUrl: true }).then(() => {
      setTimeout(() => {
        document.getElementById('footer')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 0);
    });
  }
}
