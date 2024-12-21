import { Component, OnInit } from '@angular/core';
import { ProjectCartComponent } from './project-cart/project-cart.component';
import { Carts } from '../global/carts';
import { Language } from '../global/language';
import { ToggleScroll } from '../global/togglescroll';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [ProjectCartComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent implements OnInit {

  constructor(
    public carts: Carts,
    public languageService: Language,
    public scrollbarService: ToggleScroll
  ) {
  }

  ngOnInit(): void { }

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

  choosenProject(ele: string) {
    const html = document.documentElement;
    html.classList.add('no-scroll');
    this.getSingleProject(ele);
    this.carts.toggleModal();
  }

  getSingleProject(ele: string) {
    return ele === 'Join' ? this.carts.setJoin = true :
      ele === 'ElPolloLoco' ? this.carts.setElPolloLoco = true :
        ele === 'DaBubble' ? this.carts.setDaBubble = true : null;
  }

}
