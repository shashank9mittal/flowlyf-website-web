import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DownloadSpecThankyouComponent } from './download-spec-thankyou/download-spec-thankyou.component';
import { LayoutComponent } from './layout/layout.component';
import { ScheduleCallThankyouComponent } from './schedule-call-thankyou/schedule-call-thankyou.component';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      { path: 'schedule-call-thankyou', component: ScheduleCallThankyouComponent },
      { path: 'download-spec-thankyou', component: DownloadSpecThankyouComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }
