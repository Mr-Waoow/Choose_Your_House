import { Component, ElementRef, Renderer2 } from '@angular/core';

@Component({
  selector: 'preloader',
  templateUrl: './preloader.component.html',
  styleUrl: './preloader.component.css',
})
export class PreloaderComponent {
  constructor(private  renderer: Renderer2, private elementRef: ElementRef) {}

  ngOnInit() {
    window.setTimeout(() => this.fadeout(), 500);
  }

  fadeout() {
    const element: HTMLElement = this.elementRef.nativeElement;
    this.renderer.setStyle(element, 'opacity', '0');
    this.renderer.setStyle(element, 'display', 'none');
  }


}
