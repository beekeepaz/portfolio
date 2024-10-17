import { Component } from '@angular/core';
import { ViewportScroller } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(private scroller: ViewportScroller, private router: Router) {}

  ngOnInit() {
    this.router.navigate(["/"]);
  }

  // goDown1(element: any) {
  //   this.scroller.scrollToAnchor("targetRed");
  //   console.log(element);
  //   element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }

}
