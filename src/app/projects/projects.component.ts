import { Component } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
  hideModal = true;

  setJoin = false;
  setElPolloLoco = false;
  setDaBubble = false;

  join: string = '';
  elpolloloco: string = '';
  dabubble: string = '';

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
