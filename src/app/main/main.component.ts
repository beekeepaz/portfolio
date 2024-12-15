import { Component, VERSION, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header/header.component';
import { Router } from "@angular/router";
import { MarqueeComponent } from '../main/marquee/marquee.component';
import { Language } from '../global/language';

// import { Init } from 'node:v8';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent, MarqueeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  name = "Angular " + VERSION.major;
  pointimg = "./../../assets/img/point_green.png";

  currentIndex = 0;

  banneritems: any[] = ["Frontend Developer", "Based in Hannover", "Open to work",
    "Available to work"];
  clonedArr: any[] = Array.from(this.banneritems);

  constructor(
    private router: Router,
    public languageService: Language
  ) { }

  ngOnInit() {
    // console.log("ngOnit Works");
    // console.log(this.clonedArr);
    this.router.navigate(["/"]);
  }

  scrollToId(id: string) {
    const sliderElement = document.getElementById(id);
    if (sliderElement) {
      const offsetTop = sliderElement.offsetTop;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  }

  get toggleValue(): string {
    return this.languageService.toggleValue;
  }

  set toggleValue(value: string) {
    this.languageService.toggleValue = value;
  }
}
