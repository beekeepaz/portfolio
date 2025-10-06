import { Routes } from '@angular/router';
import { GenerateComponent } from './generate/generate.component';
import { LegalNoticeComponent } from './shared/legal-notice/legal-notice.component';
import { ImprintComponent } from './shared/imprint/imprint.component';

export const routes: Routes = [
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: '', component: GenerateComponent, pathMatch: 'full' },
    { path: '**', redirectTo: '' }
];
