import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {FloedeskGoComponent} from './floedesk-go.component';


const routes: Routes = [
  { path: '', component: FloedeskGoComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowdeskGoRoutingModule { }
