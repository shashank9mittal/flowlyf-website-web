import { Component, OnInit } from '@angular/core';
import { PaymentService } from '../../shared/services/payment/payment.service';
import { CartService } from '../../shared/services/cart/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  submitDisabled = true;

  products: any = [];

  cart: any = {
    product: {}, // FlowDesk Classic (fc) OR FlowDesk MAX (fm) 
    paymentOption: {}, // buy OR subscribe
    frame: {}, // Pearl White (pw) OR Black Sand (bs)
    top: {}, // Light Maple (lm) OR Dark Walnut (dw)
    quantity: 1, // no of items
  };
  cartItems = [];
  paymentType = '';
  selectedProduct: any = {};

  constructor(private paymentService: PaymentService, private cartService: CartService) {
    // this.products = this.paymentService.products;
    this.cartService.cartItems.subscribe(items => {
      this.cartItems = items && items.length ? items : [];
      if (this.cartItems.length) {
        if (this.cartItems[0].paymentOption.sName == 'buy') {
          this.paymentType = 'buy';
        } else {
          this.paymentType = 'subscribe';
        }
      } else {
        this.paymentType = '';
      }
    })

    this.paymentService.getProducts().then(res => {
      this.products = res;
    })
  }

  ngOnInit() {
  }

  onSelection(product) {
    this.cart.product = {
      name: product.name,
      sName: product.sName,
      _id: product._id
    };
    this.selectedProduct = product;
    this.cart.paymentOption = {};
    this.cart.frame = {};
    this.cart.top = {};
  }

  isCartValid() {
    if (this.cart.product.name &&
      this.cart.paymentOption.name &&
      this.cart.frame.name &&
      this.cart.top.name) {
      return true;
    }
    return false;
  }

  addToCart() {
    if (this.cartItems.length >= 10) {
      alert("Maximum 10 items can be added to the cart at a time")
      return false;
    }
    if (this.isCartValid()) {
      this.cartService.addProductToCart(this.cart);
      this.submitDisabled = true;
      this.cartService.openCartNav();
    }
  }

}
