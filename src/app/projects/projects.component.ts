import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  hideModal = false;

  hoverJoin = false;
  hoverElPollo = false;
  hoverDaBubble = false;

  setJoin = false;
  setElPolloLoco = false;
  setDaBubble = false;

  join: string = '';
  elpolloloco: string = '';
  dabubble: string = '';

  mouseEnter(enterproject: string) {
    this.hoverJoin = enterproject === 'preJoin' ? true : this.hoverJoin;
    this.hoverElPollo = enterproject === 'preElPollo' ? true : this.hoverElPollo;
    this.hoverDaBubble = enterproject === 'preDaBubble' ? true : this.hoverDaBubble;
  }

  mouseLeave(leaveproject: string) {
    this.hoverJoin = leaveproject === 'leaveJoin' ? false : this.hoverJoin;
    this.hoverElPollo = leaveproject === 'leaveElPollo' ? false : this.hoverElPollo;
    this.hoverDaBubble = leaveproject === 'leaveDaBubble' ? false : this.hoverDaBubble;
  }

  backgroundClick() {
    this.toggleModal();
    this.setFalse();
  }

  choosenProject(ele: string) {
    this.getSingleProject(ele);
    this.toggleModal();
  }

  toggleModal() {
    this.hideModal = !this.hideModal;
  }

  getSingleProject(ele: string) {
    return ele === 'Join' ? this.setJoin = true :
      ele === 'ElPolloLoco' ? this.setElPolloLoco = true :
        ele === 'DaBubble' ? this.setDaBubble = true : null;
  }

  setFalse() {
    this.setJoin = false;
    this.setElPolloLoco = false;
    this.setDaBubble = false;
  }

}
