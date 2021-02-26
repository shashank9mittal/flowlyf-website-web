import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FloedeskGoComponent } from './floedesk-go.component';
import {DirectivesModule} from '../../shared/directives/directives.module';
import {FlowdeskGoRoutingModule} from './flowdesk-go-routing.module';



@NgModule({
  declarations: [FloedeskGoComponent],
  imports: [
    CommonModule,
    FlowdeskGoRoutingModule,
    DirectivesModule
  ]
})
export class FlowdeskGoModule { }
