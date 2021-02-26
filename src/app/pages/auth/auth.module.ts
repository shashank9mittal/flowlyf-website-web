import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { ForgotComponent } from './forgot/forgot.component';
import { MaterialModule } from '../../shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { OtpDialogComponent } from './otp-dialog/otp-dialog.component';
import { SignUpComponent } from './sign-up/sign-up.component';


@NgModule({
  declarations: [AuthComponent, SignInComponent, ForgotComponent, OtpDialogComponent, SignUpComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  entryComponents: [
    OtpDialogComponent
  ]
})
export class AuthModule { }
