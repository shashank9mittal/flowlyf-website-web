import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DirectivesModule } from '../../shared/directives/directives.module';
import { ComparisionTableComponent } from './comparision-table/comparision-table.component';


@NgModule({
  declarations: [HomeComponent, ComparisionTableComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DirectivesModule
  ]
})
export class HomeModule { }
