import { Component, Inject, OnDestroy, OnInit, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  templateUrl: './custom-cursor.component.html',
  styleUrls: ['./custom-cursor.component.scss']
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  constructor(@Inject(DOCUMENT) private doc: Document) { }

  // Positionen (öffentlich, damit das Template zugreifen kann)
  targetX = -100;
  targetY = -100;
  ringX = -100;
  ringY = -100;

  // Größen (sollten zu den CSS-Variablen passen)
  readonly DOT = 10;   // px
  readonly RING = 36;  // px

  // Zustände
  visible = false;
  active = false;       // mousedown
  interactive = false;  // Hover auf a/button/etc. oder markierten Elementen
  enabled = true;       // wird auf Touch-Geräten deaktiviert

  // Motion
  private raf: number | null = null;
  private friction = 0.16; // Nachlauf (kleiner = träger)

  ngOnInit(): void {
    // Touch & Reduced Motion respektieren
    const isCoarse = matchMedia('(pointer: coarse)').matches;
    if (isCoarse) { this.enabled = false; return; }

    if (matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.friction = 1; // praktisch kein Nachlauf
    }

    this.doc.body.classList.add('has-custom-cursor');
    this.loop();
  }

  ngOnDestroy(): void {
    if (this.raf) cancelAnimationFrame(this.raf);
    this.doc.body.classList.remove('has-custom-cursor');
  }

  private loop = () => {
    // Ring folgt Ziel mit Reibung
    this.ringX += (this.targetX - this.ringX) * this.friction;
    this.ringY += (this.targetY - this.ringY) * this.friction;
    this.raf = requestAnimationFrame(this.loop);
  };

  @HostListener('document:mousemove', ['$event'])
  onMove(e: MouseEvent) {
    if (!this.enabled) return;
    this.visible = true;
    this.targetX = e.clientX;
    this.targetY = e.clientY;

    // Interaktive Elemente erkennen
    const t = e.target as Element | null;
    this.interactive = !!t && (
      t.closest(
        // Standard-Interaktoren:
        'a, button, [role="button"], input[type="submit"], ' +
        // NEU: eigene Marker ohne Hand-Pointer:
        '.cc-interactive, [data-interactive]' +
        // (Optional/kompatibel: falls du irgendwo noch .cursor-pointer verwendest)
        ', .cursor-pointer'
      ) !== null
    );

    const overText = !!t && !!t.closest(
      'input[type="text"], input[type="search"], input[type="email"], input[type="url"], input[type="tel"], textarea, [contenteditable="true"], .mat-mdc-text-field, .mdc-text-field, .form-control'
    );
    this.doc.documentElement.classList.toggle('cc-over-text', overText);
  }

  @HostListener('document:mousedown') onDown() { if (this.enabled) this.active = true; }
  @HostListener('document:mouseup') onUp() { if (this.enabled) this.active = false; }
  @HostListener('document:mouseleave') onLeave() { if (this.enabled) this.visible = false; }
}
