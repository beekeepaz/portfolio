import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from "@angular/router";
import { Language } from '../../../global/language';
import { ToggleScroll } from '../../../global/togglescroll';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})

export class HeaderComponent {

  constructor(
    private router: Router,
    public languageService: Language,
    public scrollbarService: ToggleScroll
  ) { }

  ngOnInit() {
    this.router.navigate(["/"]);
  }

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