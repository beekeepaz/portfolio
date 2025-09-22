import { Component } from '@angular/core';
import { HeaderComponent } from '../../shared/header/header/header.component';

@Component({
  selector: 'app-legal-notice',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './legal-notice.component.html',
  styleUrl: './legal-notice.component.scss'
})
export class LegalNoticeComponent {

}
