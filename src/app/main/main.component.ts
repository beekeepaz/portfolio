import { Component, VERSION, OnInit, ViewChild, ElementRef } from '@angular/core';
import { HeaderComponent } from '../shared/header/header/header.component';
import { Router } from "@angular/router";
import { MarqueeComponent } from '../main/marquee/marquee.component';
import { Language } from '../global/language';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, MarqueeComponent],
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

  ngOnInit() {
    this.router.navigate(["/"]);
  }

  ngAfterViewInit(): void {
    this.animate();
  }

  scrollToId(id: string, duration: number = 800) {
    const target = document.getElementById(id);
    if (!target) return;

    const start = window.pageYOffset;
    const end = target.getBoundingClientRect().top + start;
    const distance = end - start;
    let startTime: number | null = null;

    const step = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      const easeInOut = progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;

      window.scrollTo(0, start + distance * easeInOut);

      if (timeElapsed < duration) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }

  onGithubEnter() {
    this.currentGithub = this.githubHover;

  }

  onGithubLeave() {
    this.currentGithub = this.githubDefault;
  }

  onMailEnter() {
    this.currentMail = this.mailHover;
  }

  onMailLeave() {
    this.currentMail = this.mailDefault;
  }

  private animate(): void {
    const track = this.trackRef.nativeElement;

    const step = () => {
      this.offset += this.speed * this.direction;

      const trackWidth = track.scrollWidth;

      const maxOffset = (trackWidth / 2) - this.speed;

      if (this.offset >= maxOffset) {
        this.direction = -1;
      }

      if (this.offset <= 0) {
        this.direction = 1;
      }

      track.style.transform = `translateY(${this.offset}px)`;
      this.animationFrameId = requestAnimationFrame(step);
    };

    this.animationFrameId = requestAnimationFrame(step);
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}
