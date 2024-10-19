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

  toggleModal() {
    this.hideModal = !this.hideModal;
    document.body.style.overflow = "hidden";
  }
}
