import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class Carts {
    modalOpen = false;

    public hideModal = false;

    public hoverJoin = false;
    public hoverElPollo = false;
    public hoverDaBubble = false;

    public setJoin = false;
    public setElPolloLoco = false;
    public setDaBubble = false;

    public join: string = '';
    public elpolloloco: string = '';
    public dabubble: string = '';

    /**
     * Toggle modal visibility flag
     */
    toggleModal(): void {
        this.hideModal = !this.hideModal;
    }

    /**
     * Reset all project selection flags to false
     */
    setFalse(): void {
        this.setJoin = false;
        this.setElPolloLoco = false;
        this.setDaBubble = false;
    }
}
