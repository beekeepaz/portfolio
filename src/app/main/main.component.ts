import { Component } from '@angular/core';
import { HeaderComponent } from '../shared/header/header/header.component';
// import { Init } from 'node:v8';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent {
  pointimg = "./../../assets/img/point_green.png";

  currentIndex = 0;

  banneritems: any[] = ["Frontend Developer", "Based in Hannover", "Open to work", "Available to work"];
  clonedArr: any[] = Array.from(this.banneritems);

  // span = document.querySelector("btn-span-sec");


  // constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    // var elements = $('.banner').length;

    // for(var i=0;i < elements; i++){
    //  $(".tithome").clone().prependTo( ".scorri" );
    // };
    console.log("ngOnit Works");
    console.log(this.clonedArr);

  }

  // ngAfterViewInit() {
  //   this.elementRef.nativeElement.querySelector('my-element')
  //     .addEventListener('click', this.onClick.bind(this));
  // }

  // onClick(event: any) {
  //   console.log(event);
  // }

}
