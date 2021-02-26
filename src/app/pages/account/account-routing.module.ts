import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account.component';
import { OrdersComponent } from './orders/orders.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderDetailsComponent } from './order-details/order-details.component';


const routes: Routes = [{
  path: '', component: AccountComponent, children: [
    { path: '', pathMatch: 'full', redirectTo: 'orders' },
    { path: 'orders', component: OrdersComponent, pathMatch: 'full' },
    { path: 'orders/:id', component: OrderDetailsComponent, pathMatch: 'full' },
    { path: 'profile', component: ProfileComponent, pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
