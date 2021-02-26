import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogsDetailComponent } from './blogs-detail/blogs-detail.component';
import { BlogsComponent } from './blogs.component';

const routes: Routes = [
  { path: '', component: BlogsComponent },
  { path: ':blogId', component: BlogsDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogsRoutingModule { }
