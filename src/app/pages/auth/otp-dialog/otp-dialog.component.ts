import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-otp-dialog',
  templateUrl: './otp-dialog.component.html',
  styleUrls: ['./otp-dialog.component.scss']
})
export class OtpDialogComponent implements OnInit {

  public otpForm: FormGroup;
  public submitted = false;
  private params = {};

  constructor(
    private dialogRef: MatDialogRef<OtpDialogComponent>,
    @Inject(MAT_DIALOG_DATA) data,
    private authService: AuthService) {
      console.log(data);
      this.params = data;
  }

  ngOnInit() {
    this.otpForm = new FormGroup({
      otp: new FormControl("", Validators.required)
    });
  }

  closeDialog(action: any = "") {
    this.dialogRef.close(action);
  }

  signin() {
    if (!this.otpForm.valid) {
      return false;
    }
    this.submitted = true;
    this.params['otp'] = this.otpForm.value.otp;
    this.authService.signin(this.params).then(res => {
      this.submitted = false;
      this.closeDialog(res);
    }, err => {
      this.submitted = false;
    })
  }

}
