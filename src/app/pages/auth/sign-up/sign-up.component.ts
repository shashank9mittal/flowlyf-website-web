import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { emailValidator, matchingPasswords } from '../../../shared/utils/app-validators';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  // reactive form
  public registerForm: FormGroup;
  // validation
  public submitted = false;

  constructor(public formBuilder: FormBuilder,
    public router: Router,
    // public snackBar: MatSnackBar
  ) {
  }

  // Initially initialize reactive form
  ngOnInit() {
    const mobileValidationPattern = '^-?[0-9]\\d*(\\.\\d{1,2})?$';
    const nameValidationPattern = '[a-zA-Z \'-,;.]*';
    this.registerForm = this.formBuilder.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.pattern(nameValidationPattern), Validators.minLength(3)])],
      'lastName': ['', Validators.pattern(nameValidationPattern)],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      // 'password': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
      // 'confirmPassword': ['', Validators.compose([Validators.required])],
      'phone': ['', Validators.compose([Validators.required, Validators.pattern(mobileValidationPattern)])]
    });
    // }, { validator: matchingPasswords('password', 'confirmPassword') });

  }

  /** calls authSandbox doRegister if tthe from is valid.
   Then calls resetAllFormFields for reset **/
  public onRegisterFormSubmit(values: Object): void {
    if (this.registerForm.valid) {

      this.submitted = false;
      this.registerForm.reset();
      // this.resetAllFormFields(this.registerForm);
    } else {
      this.submitted = true;
    }
  }

  // reset the values
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

  // validate the reactive form
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
