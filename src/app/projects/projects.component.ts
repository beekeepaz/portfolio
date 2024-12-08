import { Component, OnInit } from '@angular/core';
import { ProjectCartComponent } from './project-cart/project-cart.component';
import { Carts } from '../global/carts';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCartComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(public carts: Carts) {
  }

  ngOnInit(): void {
    console.log(this.carts.hideModal); // Globale Variable prüfen
  }

  mouseEnter(enterproject: string) {
    this.carts.hoverJoin = enterproject === 'preJoin' ? true : this.carts.hoverJoin;
    this.carts.hoverElPollo = enterproject === 'preElPollo' ? true : this.carts.hoverElPollo;
    this.carts.hoverDaBubble = enterproject === 'preDaBubble' ? true : this.carts.hoverDaBubble;
  }

  mouseLeave(leaveproject: string) {
    this.carts.hoverJoin = leaveproject === 'leaveJoin' ? false : this.carts.hoverJoin;
    this.carts.hoverElPollo = leaveproject === 'leaveElPollo' ? false : this.carts.hoverElPollo;
    this.carts.hoverDaBubble = leaveproject === 'leaveDaBubble' ? false : this.carts.hoverDaBubble;
  }

  backgroundClick() {
    console.log('Background clicked');
    this.carts.toggleModal();
    this.carts.setFalse();
  }

  choosenProject(ele: string) {
    console.log(ele);
    this.getSingleProject(ele);
    this.carts.toggleModal();
  }

  getSingleProject(ele: string) {
    return ele === 'Join' ? this.carts.setJoin = true :
      ele === 'ElPolloLoco' ? this.carts.setElPolloLoco = true :
        ele === 'DaBubble' ? this.carts.setDaBubble = true : null;
  }

}
