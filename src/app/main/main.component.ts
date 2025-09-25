import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from "@angular/router";
import { MarqueeComponent } from '../main/marquee/marquee.component';
import { Language } from '../global/language';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [MarqueeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})

export class MainComponent implements OnInit {
  name = "Angular " + VERSION.major;

  githubDefault = 'assets/img/github_green.png';
  githubHover = 'assets/img/github_white.png';

  mailDefault = 'assets/img/mail_green.png';
  mailHover = 'assets/img/mail_white.png';

  currentGithub = this.githubDefault;
  currentMail = this.mailDefault;

  private animationFrameId = 0;
  private offset = 0;
  private speed = 0.15;

  private direction: number = 1;

  @ViewChild('arrowtrack') trackRef!: ElementRef<HTMLDivElement>;

  constructor(
    private router: Router,
    public languageService: Language
  ) { }

  // Navigate to root on init
  ngOnInit() {
    this.router.navigate(["/"]);
  }

  // Start arrow animation when view is ready
  ngAfterViewInit(): void {
    this.animate();
  }

  // Smooth-scroll to an element by id with easing
  public scrollToId(id: string, duration = 800): void {
    const target = document.getElementById(id);
    if (!target) return;

    const { start, distance } = this.scrollMetrics(target);
    this.rafTween(duration, t => {
      window.scrollTo(0, start + distance * this.easeInOut(t));
    });
  }

  // Compute current scroll position and distance to target
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

  // Quadratic ease-in-out (0..1 -> 0..1)
  private easeInOut(t: number): number {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  }

  // requestAnimationFrame tween helper over a duration
  private rafTween(duration: number, frame: (t: number) => void): void {
    const t0 = performance.now();
    const step = (now: number) => {
      const t = Math.min((now - t0) / duration, 1);
      frame(t);
      if (t < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }

  // Swap GitHub icon on hover (enter)
  onGithubEnter() {
    this.currentGithub = this.githubHover;

  }

  // Restore GitHub icon on hover (leave)
  onGithubLeave() {
    this.currentGithub = this.githubDefault;
  }

  // Swap mail icon on hover (enter)
  onMailEnter() {
    this.currentMail = this.mailHover;
  }

  // Restore mail icon on hover (leave)
  onMailLeave() {
    this.currentMail = this.mailDefault;
  }

  // Vertical ping-pong animation for the arrow track
  private animate(): void {
    const track = this.trackRef.nativeElement as HTMLElement;

    const step = () => {
      const max = this.maxOffset(track.scrollWidth, this.speed);
      [this.offset, this.direction] = this.pingPong(this.offset, this.direction as 1 | -1, this.speed, 0, max);
      this.applyTransformY(track, this.offset);
      this.animationFrameId = requestAnimationFrame(step);
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

  // Max vertical offset based on track width
  private maxOffset(trackWidth: number, speed: number): number {
    return trackWidth / 2 - speed;
  }

  // Move value between min/max and reverse direction at bounds
  private pingPong(offset: number, dir: 1 | -1, speed: number, min: number, max: number): [number, 1 | -1] {
    let next = offset + speed * dir;
    if (next >= max || next <= min) {
      dir = dir === 1 ? -1 : 1;
      next = Math.max(min, Math.min(max, next));
    }
    return [next, dir];
  }

  // Apply vertical translate to element
  private applyTransformY(el: HTMLElement, y: number): void {
    el.style.transform = `translateY(${y}px)`;
  }

  // Read current language toggle
  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  // Update language toggle
  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}
