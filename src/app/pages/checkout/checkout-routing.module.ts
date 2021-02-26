import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout.component';
import { CheckoutThankyouComponent } from './checkout-thankyou/checkout-thankyou.component';


const routes: Routes = [
  { path: '', component: CheckoutComponent },
  { path: 'thankyou', component: CheckoutThankyouComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule { }
