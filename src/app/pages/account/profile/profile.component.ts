import { Component, OnInit, ElementRef, ViewChild, OnDestroy } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material';
import { Subscription } from 'rxjs';
import { emailValidator } from '../../../shared/utils/app-validators';
import { AuthService } from '../../../shared/services/auth/auth.service';
import { UserService } from '../../../shared/services/user/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit, OnDestroy {

  // reactive form
  public infoForm: FormGroup;
  public passwordForm: FormGroup;
  // ipload image
  public imageUrl: any = "./assets/download.png";
  public imagePath: string;
  // validation
  public ifSubmitted = false;
  public ifPasswordForm = false;
  // subscription
  private subscriptions: Array<Subscription> = [];

  @ViewChild('filePath', { static: false }) filePath: ElementRef;

  constructor(public formBuilder: FormBuilder,
    private userService: UserService,
    public authService: AuthService
  ) {
  }

  // Initially calls initInfoForm,initPasswordForm,setProfile
  ngOnInit() {
    // this.imagePath = this.configService.getImageUrl();
    this.initInfoForm();
    // this.initPasswordForm();
    this.setProfile();
  }

  // build a form for info  by gouping the form control
  initInfoForm() {
    this.infoForm = this.formBuilder.group({
      'firstName': ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      'lastName': ['', Validators.compose([Validators.required, Validators.minLength(1)])],
      'email': ['', Validators.compose([Validators.required, emailValidator])],
      'phone': [''],
    });
  }

  // build a form for change password  by gouping the form control

  initPasswordForm() {
    this.passwordForm = this.formBuilder.group({
      'currentPassword': ['', Validators.compose([Validators.required])],
      'newPassword': ['', Validators.compose([Validators.required, Validators.minLength(5)])],
    }
    );
  }


  // set the user details to the form by fetching the profile details from sandbox
  private setProfile() {
    this.userService.getProfile().then(profile => {
      if (profile) {
        this.infoForm.controls['firstName'].setValue(profile.firstName);
        this.infoForm.controls['lastName'].setValue(profile.lastName);
        this.infoForm.controls['email'].setValue(profile.email);
        this.infoForm.controls['phone'].setValue(profile.phone);
        // this.imageUrl = this.imagePath + '?path=' + profile.avatarPath + '&name=' + profile.avatar + '&width=60&height=60';
      }
    }, err => { })
  }

  onSelectCountry(countryid: number) {
  }
  onSelectZone(zoneid: number) {

  }
  /**
   * upload new user image
   *
   * @param el refer the HTMLElement filePath
   * it will activate the click function of el
   */
  uploadButtonClick() {
    const el: HTMLElement = this.filePath.nativeElement as HTMLElement;
    el.click();
  }

  // calls convertBase64 to convert data into base64 formt
  uploadChange($event): void {
    this.convertBase64($event.target);
  }

  // convert image file into Base64 format
  private convertBase64(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();

    myReader.onloadend = (e) => {
      this.imageUrl = myReader.result;
    };
    myReader.readAsDataURL(file);
  }

  // call edit user info functionality if the form is valid

  public onInfoFormSubmit(): void {
    if (this.infoForm.valid) {
      const params: any = this.infoForm.value;
      params.image = this.imageUrl;
      // this.userService.updateProfile();
      // this.accountSandbox.doEditProfile(params);
      this.ifSubmitted = false;
      this.imageUrl = '';
      this.infoForm.reset();
      this.infoForm.clearValidators();
    } else {
      this.ifSubmitted = true;
    }
  }

  // call change password functionality if the password form is valid
  // public onPasswordFormSubmit(): void {

  //   if (this.passwordForm.valid) {
  //     // this.accountSandbox.doChangepassword(this.passwordForm.value);
  //     this.ifPasswordForm = false;
  //     this.passwordForm.reset();
  //     this.passwordForm.clearValidators();
  //     // this.resetAllFormFields(this.passwordForm);
  //   } else {
  //     this.ifPasswordForm = true;
  //   }
  // }

  // reset form fields and clear validation
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

  // destroy the subscribed events while page destroy
  ngOnDestroy() {
    this.subscriptions.forEach(each => {
      each.unsubscribe();
    });
  }

}
