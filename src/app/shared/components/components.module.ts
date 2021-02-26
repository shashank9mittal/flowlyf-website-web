import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ComponentsRoutingModule } from './components-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutComponent } from './layout/layout.component';
import { DirectivesModule } from '../directives/directives.module';
import { CartSidenavComponent } from './cart-sidenav/cart-sidenav.component';
import { ScheduleCallComponent } from './schedule-call/schedule-call.component';
import { MaterialModule } from '../material/material.module';
import { ScheduleCallThankyouComponent } from './schedule-call-thankyou/schedule-call-thankyou.component';
import { DownloadSpecComponent } from './download-spec/download-spec.component';
import { DownloadSpecThankyouComponent } from './download-spec-thankyou/download-spec-thankyou.component';


@NgModule({
  imports: [
    CommonModule,
    ComponentsRoutingModule,
    DirectivesModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CartSidenavComponent,
    ScheduleCallComponent,
    ScheduleCallThankyouComponent,
    DownloadSpecComponent,
    DownloadSpecThankyouComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    LayoutComponent,
    CartSidenavComponent,
    ScheduleCallComponent,
    DownloadSpecComponent,
    DownloadSpecThankyouComponent
  ],
  entryComponents: [
    ScheduleCallComponent,
    DownloadSpecComponent
  ]
})
export class ComponentsModule { }
