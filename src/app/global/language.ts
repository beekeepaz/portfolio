import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Singleton-Service
})

export class Language {

    public headerenglish = {
        navleft: 'About me',
        navmid: 'Skills',
        navright: 'Projects'
    };

    public headergerman = {
        navleft: 'Ueber mich',
        navmid: 'Faehigkeiten',
        navright: 'Projekte'
    };

    public mainenglish = {

    }

    public maingerman = {
        
    }

    public toggleValue: string = 'false';

    get currentHeader(): any {
        return this.toggleValue === 'false' ? this.headerenglish : this.headergerman;
    }
}