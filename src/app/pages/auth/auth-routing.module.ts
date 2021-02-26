import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotComponent } from './forgot/forgot.component';
import { SignUpComponent } from './sign-up/sign-up.component';


const routes: Routes = [{
  path: '', component: AuthComponent, children: [
    // { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '', component: SignInComponent, pathMatch: 'full' },
    { path: 'sign-in', component: SignInComponent, pathMatch: 'full' },
    { path: 'sign-up', component: SignUpComponent, pathMatch: 'full' },
    { path: 'forgot', component: ForgotComponent, pathMatch: 'full' },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
