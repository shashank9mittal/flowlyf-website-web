import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogsRoutingModule } from './blogs-routing.module';
import { BlogsComponent } from './blogs.component';
import { BlogsDetailComponent } from './blogs-detail/blogs-detail.component';
import { BlogsSubsComponent } from './blogs-subs/blogs-subs.component';
import {SafeHtmlPipe} from './pipes/safe-html.pipe';


@NgModule({
  declarations: [
    BlogsComponent,
    BlogsDetailComponent,
    SafeHtmlPipe,
    BlogsSubsComponent],
  imports: [
    CommonModule,
    BlogsRoutingModule
  ]
})
export class BlogsModule { }
