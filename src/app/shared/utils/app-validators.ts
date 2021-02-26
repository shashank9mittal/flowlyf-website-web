import {FormGroup, FormControl, Validators} from '@angular/forms';

export function emailValidator(control: FormControl): { [key: string]: any } {
    const emailRegexp = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/;
    if (control.value && !emailRegexp.test(control.value)) {
        return {invalidEmail: true};
    }
}

export function phoneValidator(control: FormControl): { [key: string]: any } {
    const phoneRegexp = /[0-9]/;
    if (control.value && !phoneRegexp.test(control.value)) {
        return {invalidPhone: true};
    }
}

export function matchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
        const password = group.controls[passwordKey];
        const passwordConfirmation = group.controls[passwordConfirmationKey];
        if (password.value !== passwordConfirmation.value) {
            return passwordConfirmation.setErrors({mismatchedPasswords: true});
        }
    };
}

export function phoneOrEmailValidator(emailKey: string, phoneKey: any) {
    return (group: FormGroup) => {
        const email = group.controls[emailKey];
        const phone = group.controls[phoneKey];
        if (email.value.length) {
            // phone.setValue("");
            // phone.clearValidators();
            // group.updateValueAndValidity();
        } else if (phone.value.length) {
            // email.setValue("");
            // email.clearValidators();
            // group.updateValueAndValidity();
        } else {
            // phone.setValidators([Validators.required]);
            // email.setValidators(Validators.compose([Validators.required, emailValidator]));
            // group.updateValueAndValidity();
        }
        return;
    };
}

