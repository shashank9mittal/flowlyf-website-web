import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckoutRoutingModule } from './checkout-routing.module';
import { CheckoutComponent } from './checkout.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CheckoutThankyouComponent } from './checkout-thankyou/checkout-thankyou.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ComponentsModule } from '../../shared/components/components.module';

import { GooglePlaceModule } from "ngx-google-places-autocomplete";
import { GstDialogComponent } from './gst-dialog/gst-dialog.component';


@NgModule({
  declarations: [CheckoutComponent, CheckoutThankyouComponent, GstDialogComponent],
  imports: [
    CommonModule,
    CheckoutRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    ComponentsModule,
    GooglePlaceModule
  ],
  entryComponents: [GstDialogComponent]
})
export class CheckoutModule { }
