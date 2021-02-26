import { Component, OnInit, ViewChild, HostListener, PLATFORM_ID, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PaymentService } from '../../shared/services/payment/payment.service';
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth/auth.service';
import { MatDialog } from '@angular/material';
import { GstDialogComponent } from './gst-dialog/gst-dialog.component';
import { UtilityService } from '../../shared/services/utility/utility.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {

  @ViewChild('cForm', null) cForm: NgForm;
  isLoggedIn: boolean = false;
  submitted = false;
  gstInfo: any = {};
  innerWidth: any;

  constructor(
    private paymentService: PaymentService,
    private router: Router,
    private authService: AuthService,
    private dialog: MatDialog,
    private utilityService: UtilityService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.authService.isLoggedIn.subscribe(res => {
      console.log("isLoggedIn: ", res);
      this.isLoggedIn = res;
    })

    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth;
    }
  }

  ngOnInit() {
    let checkOutData = this.utilityService.getData('checkOutData');
    if (checkOutData) {
      setTimeout(() => { this.cForm.form.patchValue(checkOutData) }, 1000);
    }
    if (this.isLoggedIn) {
      const user = this.utilityService.getData('flow_user').user;
      checkOutData = checkOutData ? checkOutData : {};
      for (const key in user) {
        checkOutData[key] && checkOutData[key].length ? "" : checkOutData[key] = (user[key] || "");
      }
      setTimeout(() => { this.cForm.form.patchValue(checkOutData) }, 1000);
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    if (isPlatformBrowser(this.platformId)) {
      this.innerWidth = window.innerWidth;
    }
  }

  signIn() {
    const data = this.cForm.form.value;
    this.utilityService.setData('checkOutData', data);
    this.router.navigate(['/auth'], { queryParams: { location: 'checkout' } });
  }

  onFormSubmit(cForm: NgForm) {
    console.log(cForm.value);
    let params = cForm.value;
    !params.email ? params.email = cForm.controls.email.value : '';
    !params.phone ? params.phone = cForm.controls.phone.value : '';
    if (this.submitted) {
      return false;
    }
    this.submitted = true;
    const cart = this.utilityService.getData("cItems");
    const checkoutType = cart[0].paymentOption.sName == 'subscribe' ? 'subscription' : 'buy';
    this.paymentService.createOrder(checkoutType, { details: params, cart }).then(res => {
      this.submitted = false;
      const gstInfo = {
        number: this.gstInfo.number,
        company: this.gstInfo.company,
        address: this.gstInfo.address
      }
      this.initPayment(res.details, { details: params, cart, gstInfo: gstInfo });
    }, err => {
      this.submitted = false;
      alert(err.message);
      console.log(err);
    });
  }

  private initPayment(details, data) {
    details['prefill'] = {
      email: data.details.email,
      contact: data.details.phone
    };
    this.paymentService.payWithRazor(details).then(res => {
      data['paymentDetails'] = res;
      this.verifyPaymentAndCreateOrder(details, data);
    }, err => {
      console.log(err);
    });
  }

  private verifyPaymentAndCreateOrder(details, data) {
    this.paymentService.verifyPayment(details.paymentType, data).then(res => {
      this.utilityService.clearData('checkOutData');
      const orderId = res.orderId.substring(res.orderId.length - 10);
      this.router.navigate(['./checkout/thankyou'], { queryParams: { orderId } });
    }, err => {
      console.log(err);
    })
  }

  openGSTDialog() {
    let dialogRef = this.dialog.open(GstDialogComponent, {
      data: { gstInfo: this.gstInfo, details: this.cForm.value },
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result && result.number && result.address && result.company) {
        this.gstInfo = result;
      } else {
        this.gstInfo = {};
      }
    });
  }

}
