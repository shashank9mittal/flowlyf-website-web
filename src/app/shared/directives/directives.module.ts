import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataInjectSvgDirective } from './data-inject-svg/data-inject-svg.directive';
import { DataFlickityDirective } from './data-flickity/data-flickity.directive';



@NgModule({
  declarations: [
    DataInjectSvgDirective,
    DataFlickityDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DataInjectSvgDirective,
    DataFlickityDirective
  ]
})
export class DirectivesModule { }
