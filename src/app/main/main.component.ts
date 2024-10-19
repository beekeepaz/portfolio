import { Component, VERSION, OnInit } from '@angular/core';
import { HeaderComponent } from '../shared/header/header/header.component';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

// import { Init } from 'node:v8';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  name = "Angular " + VERSION.major;
  pointimg = "./../../assets/img/point_green.png";
  // root: HTMLElement = document.documentElement;

  currentIndex = 0;

  banneritems: any[] = ["Frontend Developer", "Based in Hannover", "Open to work", "Available to work"];
  clonedArr: any[] = Array.from(this.banneritems);

  // span = document.querySelector("btn-span-sec");


  // constructor(private elementRef: ElementRef) { }
  constructor(private scroller: ViewportScroller, private router: Router) { }

  ngOnInit() {
    // var elements = $('.banner').length;

    // for(var i=0;i < elements; i++){
    //  $(".tithome").clone().prependTo( ".scorri" );
    // };
    console.log("ngOnit Works");
    console.log(this.clonedArr);
    this.router.navigate(["/"]);
    // this.root.addEventListener("mousemove", e => {
    //   this.root.style.setProperty('--mouse-x', e.clientX + "px");
    //   this.root.style.setProperty('--mouse-y', e.clientY + "px");
    // });
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


}
