import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[styleRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) {
    el.nativeElement.style.color = '#ec7592'
  }
}
