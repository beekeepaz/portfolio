import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Singleton-Service
})

export class ToggleScroll {
    public isChecked: boolean = false;
}