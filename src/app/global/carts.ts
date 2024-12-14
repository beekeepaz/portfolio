import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root', // Singleton-Service
})

export class Carts {
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

    toggleModal() {
        this.hideModal = !this.hideModal;
    }

    setFalse() {
        this.setJoin = false;
        this.setElPolloLoco = false;
        this.setDaBubble = false;
    }
}