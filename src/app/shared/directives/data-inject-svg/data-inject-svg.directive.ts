import { Directive, ElementRef, OnInit } from '@angular/core';
import 'core-js/features/array/from';
import { SVGInjector } from '@tanem/svg-injector';


@Directive({
  selector: '[data-inject-svg]'
})
export class DataInjectSvgDirective implements OnInit {
  
  ngOnInit() {
    SVGInjector(document.querySelectorAll('[data-inject-svg]'));
  }

}
