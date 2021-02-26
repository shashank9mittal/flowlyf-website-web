import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { emailValidator, phoneOrEmailValidator } from '../../../shared/utils/app-validators';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { MatDialog } from '@angular/material';
import { OtpDialogComponent } from '../otp-dialog/otp-dialog.component';
import { options } from '../../../shared/services/api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { UtilityService } from '../../../shared/services/utility/utility.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  public loginForm: FormGroup;
  // validation
  public submitted = false;
  private queryParams: any;

  constructor(
    public formBuilder: FormBuilder,
    public router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
    private activatedRoute: ActivatedRoute,
    private utilityService: UtilityService
    // public snackBar: MatSnackBar,
    // public authSandbox: AuthSandbox
  ) { }

  // Initially initialize the reactive form
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      // email: ['', Validators.compose([Validators.required, emailValidator])],
      // phone: ['', Validators.required],
      // email: ['akashh1993@gmail.com', emailValidator],
      email: ['', emailValidator],
      phone: [''],
      // password: [
      //   '',
      //   Validators.compose([Validators.required, Validators.minLength(5)])
      // ]
    });
    // }, { validator: phoneOrEmailValidator('email', 'phone') });

    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params)
      this.queryParams = params;
    });
  }




  /** calls authSandbox  doLogin if the form is valid.
   *
   * Then calls resetAllFormFields to reset the form fields .
   */
  public onLoginFormSubmit(values: Object): void {
    this.submitted = true;
    const params = this.loginForm.value;
    if (this.loginForm.valid && (params.email.length || params.phone.length == 10)) {
      this.authService.generateOtp(params).then(res => {
        this.submitted = false;
        this.openOtpDialog(params);
      }, err => {
        this.submitted = false;
      })
    } else {
      alert("Invalid signin details.")
    }
  }

  openOtpDialog(params: any) {
    let dialogRef = this.dialog.open(OtpDialogComponent, {
      data: params,
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.token) {
        console.log(`Dialog result: ${result}`);
        this.signInComplete(result);
      }
    });
  }

  private signInComplete(result) {
    this.authService.isLoggedIn.next(true);
    this.utilityService.setData("flow_user", result);
    let header = new HttpHeaders().set('Authorization', result.token);
    options.headers = header;
    if (this.queryParams.location && this.queryParams.location == 'checkout') {
      this.router.navigate(['./checkout']);
    } else {
      this.router.navigate(['./account/orders']);
    }
  }

  // reset the form fields
  resetAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.reset();
        control.clearValidators();
        control.updateValueAndValidity();
      } else if (control instanceof FormGroup) {
        this.resetAllFormFields(control);
      }
    });
  }

  // validate the form fields
  validateAllFormFields(formGroup: FormGroup) {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.validateAllFormFields(control);
      }
    });
  }

}
