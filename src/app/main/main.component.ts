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

banneritems = ["Frontend Developer", "Based in Hannover", "Open to work", "Available to work", ];


ngOnInit() {
  // var elements = $('.banner').length;

  // for(var i=0;i < elements; i++){
  //  $(".tithome").clone().prependTo( ".scorri" );
  // };
  console.log("ngOnit Works")
}

}
