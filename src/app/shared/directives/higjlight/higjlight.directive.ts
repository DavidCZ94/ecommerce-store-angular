import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHigjlight]'
})
export class HigjlightDirective {

  constructor(
    element: ElementRef
  ) {
    element.nativeElement.style.backgroundColor = 'red';
   }

}
