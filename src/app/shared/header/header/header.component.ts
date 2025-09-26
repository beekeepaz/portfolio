import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Language } from '../../../global/language';
import { ToggleScroll } from '../../../global/togglescroll';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  readonly languageService = inject(Language);

  constructor(
    private router: Router,
    public scrollbarService: ToggleScroll
  ) { }

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

  /**
   * Smoothly scroll to an element by ID; if not on root, navigate home first and then scroll
   * @param {string} id - target element ID to scroll into view
   * @param {number} [duration=800] - animation duration in milliseconds
   * @returns {void}
   */
  public scrollToId(id: string, duration = 800): void {
    if (this.tryScroll(id, duration)) return;

    this.router.navigate(['/']).then(() =>
      setTimeout(() => this.tryScroll(id, duration), 0)
    );
  }

  /**
   * Attempt to smoothly scroll to an element by ID
   * @param {string} id - target element ID
   * @param {number} duration - animation duration in milliseconds
   * @returns {boolean} true if the element was found and scrolling started, false otherwise
   */
  private tryScroll(id: string, duration: number): boolean {
    const el = document.getElementById(id);
    if (!el) return false;

    const { start, distance } = this.scrollMetrics(el);
    this.rafTween(duration, t => window.scrollTo(0, start + distance * this.easeInOut(t)));
    return true;
  }

  /**
   * Calculate scroll metrics for a target element
   * @param {HTMLElement} el - element to measure position of
   * @returns {{start: number, distance: number}} start offset and distance to target element
   */
  private scrollMetrics(el: HTMLElement): { start: number; distance: number } {
    const start = window.pageYOffset;
    const end = el.getBoundingClientRect().top + start;
    return { start, distance: end - start };
  }

  /*   private easeInOut(t: number): number {
      if (t <= 0) return 0;
      if (t >= 1) return 1;
  
      Erste Hälfte: Ease-In (beschleunigt)
      if (t < 0.5) return 2 * t * t;
  
      Zweite Hälfte: Ease-Out (abgebremst)
      return 1 - Math.pow(2 - 2 * t, 2) / 2;
    } */

  /**
   * Calculate scroll metrics for a target element
   * @param {HTMLElement} el - element to measure position of
   * @returns {{start: number, distance: number}} start offset and distance to target element
   */
  private easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  /**
   * Run a requestAnimationFrame loop for a given duration and call a frame callback
   * @param {number} duration - animation duration in milliseconds
   * @param {(t: number) => void} frame - callback executed on each frame with progress (0..1)
   * @returns {void}
   */
  private rafTween(duration: number, frame: (t: number) => void): void {
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      frame(t);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  /**
   * Switch the current application language
   * @param {string} value - new language toggle value
   * @returns {void}
   */
  switchLanguage(value: string): void {
    this.languageService.toggleValue = value;
  }

  /**
   * Lifecycle hook: on component initialization navigate to the root route
   * @returns {void}
   */
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  /**
   * Handle background click: reset scrollbar state and update DOM after delay
   * @returns {void}
   */
  backgroundClick() {
    this.scrollbarService.isChecked = false;
    setTimeout(() => {
      this.logCheckedStatus();
    }, 100);
  }

  get isChecked(): boolean {
    return this.scrollbarService.isChecked;
  }

  set isChecked(value: boolean) {
    this.scrollbarService.isChecked = value;
    this.logCheckedStatus();
  }

  /**
   * Update the <html> element class based on scrollbar state
   * Adds 'no-scroll' if checked, removes it otherwise
   */
  logCheckedStatus(): void {
    const html = document.documentElement;
    if (this.scrollbarService.isChecked) {
      html.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
    }
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}