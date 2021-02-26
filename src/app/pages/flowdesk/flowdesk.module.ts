import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlowdeskRoutingModule } from './flowdesk-routing.module';
import { FlowdeskComponent } from './flowdesk.component';
import { DirectivesModule } from '../../shared/directives/directives.module';


@NgModule({
  declarations: [FlowdeskComponent],
  imports: [
    CommonModule,
    FlowdeskRoutingModule,
    DirectivesModule
  ]
})
export class FlowdeskModule { }
