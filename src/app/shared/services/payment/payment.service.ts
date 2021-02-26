import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { WindowRefService } from '../window-ref/window-ref.service';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {

  private products = [];

  constructor(
    private apiService: ApiService,
    private winRef: WindowRefService
  ) { }

  getProducts() {
    return new Promise<any>((resolve, reject) => {
      if (Object.keys(this.products).length) {
        resolve(this.products);
      } else {
        this.apiService.api('getProducts').then(res => {
          this.products = res;
          resolve(res);
        }, err => {
          reject(err);
        })
      }
    });
  }

  createOrder(orderType, params) {
    return new Promise<any>((resolve, reject) => {
      const apiURL = orderType == 'subscription' ? 'createSubsOrder' : 'createOrder';
      this.apiService.api(apiURL, params).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }

  verifyPayment(verifyType, params) {
    return new Promise<any>((resolve, reject) => {
      const apiURL = verifyType == 'subscription' ? 'verifySubsOrder' : 'verifyOrder';
      this.apiService.api(apiURL, params).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }

  /**
   * 
   * @param details  {
   * paymentType: buy or subscription,
   * customerId: customer_id,
   * orderId: order_id,
   * prefill: {name, email, contact},
   * note: {key:value},
   * }
   */
  payWithRazor(details: any) {
    return new Promise<any>((resolve, reject) => {
      const options: any = {
        currency: 'INR',
        name: "Flowlyf",
        // description: "Flowlyf",
        image: "https://www.flowlyf.com/assets/flow-new-img/logo/Black.png",
        order_id: details.orderId,
        handler: (response: any) => {
          console.log(response);
          response.razorpay_payment_id ? resolve(response) : reject(response);
        },
        theme: { color: "#009b72" },
      };
      details.amount ? options['amount'] = details.amount : '';
      details.prefill ? options['prefill'] = details.prefill : '';
      details.notes ? options['notes'] = details.notes : '';

      if (details.paymentType == 'buy') {

      } else if (details.paymentType == 'subscription') {
        options['customer_id'] = details.customerId;
        options['recurring'] = "1";
      }
      console.log(options);
      const rzp = new this.winRef.nativeWindow.Razorpay(options);
      rzp.open();
    });
  }
}
