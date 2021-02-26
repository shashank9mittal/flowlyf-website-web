import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PricingPlanRoutingModule } from './pricing-plan-routing.module';
import { PricingPlanComponent } from './pricing-plan.component';
import { DirectivesModule } from '../../shared/directives/directives.module';


@NgModule({
  declarations: [PricingPlanComponent],
  imports: [
    CommonModule,
    PricingPlanRoutingModule,
    DirectivesModule
  ]
})
export class PricingPlanModule { }
