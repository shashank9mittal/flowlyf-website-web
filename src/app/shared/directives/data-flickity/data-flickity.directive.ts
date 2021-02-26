import { Directive, OnInit, ElementRef } from '@angular/core';
import 'flickity';

declare var $: any;

@Directive({
  selector: '[data-flickity]'
})
export class DataFlickityDirective implements OnInit {

  constructor(private elm: ElementRef) { }

  ngOnInit() {
    let data = JSON.parse(this.elm.nativeElement.dataset.flickity);
    // console.log(data)
    setTimeout(() => {
      $(this.elm.nativeElement).flickity(data);
    }, 100);
  }

}
