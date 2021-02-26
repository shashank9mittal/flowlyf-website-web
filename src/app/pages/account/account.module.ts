import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { AccountComponent } from './account.component';
import { OrdersComponent } from '../account/orders/orders.component';
import { ProfileComponent } from '../account/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../../shared/material/material.module';
import { OrderDetailsComponent } from './order-details/order-details.component';


@NgModule({
  declarations: [AccountComponent, OrdersComponent, ProfileComponent, OrderDetailsComponent],
  imports: [
    CommonModule,
    AccountRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ]
})
export class AccountModule { }
