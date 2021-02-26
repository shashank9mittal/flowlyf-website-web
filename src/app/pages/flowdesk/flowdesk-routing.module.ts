import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlowdeskComponent } from './flowdesk.component';


const routes: Routes = [
  { path: '', component: FlowdeskComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FlowdeskRoutingModule { }
