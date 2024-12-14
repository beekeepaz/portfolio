import { Component } from '@angular/core';
import { MainComponent } from './../main/main.component';
import { AboutComponent } from './../about/about.component';
import { SkillsComponent } from './../skills/skills.component';
import { ProjectsComponent } from "./../projects/projects.component";
import { ReevaluationComponent } from "./../reevaluation/reevaluation.component";
import { ContactComponent } from "./../contact/contact.component";

@Component({
  selector: 'app-generate',
  standalone: true,
  imports: [
    MainComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ReevaluationComponent,
    ContactComponent,
  ],
  templateUrl: './generate.component.html',
  styleUrl: './generate.component.scss'
})
export class GenerateComponent {

}
