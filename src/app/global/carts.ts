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

    // Toggle modal visibility flag
    toggleModal() {
        this.hideModal = !this.hideModal;
    }

    // Reset all selection flags to false
    setFalse() {
        this.setJoin = false;
        this.setElPolloLoco = false;
        this.setDaBubble = false;
    }
}