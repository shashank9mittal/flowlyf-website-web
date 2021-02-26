import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { Router } from '@angular/router';
import { UtilityService } from '../../services/utility/utility.service';

@Component({
  selector: 'app-cart-sidenav',
  templateUrl: './cart-sidenav.component.html',
  styleUrls: ['./cart-sidenav.component.scss']
})
export class CartSidenavComponent implements OnInit {

  @Input() fromCheckout : boolean = false;
  cartItems = [];

  constructor(
    private cartService: CartService,
    private utilityService: UtilityService,
    private router: Router,
  ) {
    cartService.cartItems.subscribe(items => {
      this.cartItems = items;
    });
  }

  ngOnInit() {
  }

  closeCartNav() {
    this.cartService.closeCartNav();
  }

  openCartNav() {
    this.cartService.openCartNav();
  }

  calculatTotalGST() {
    let gst = 0;
    this.cartItems.forEach(item => {
      const price = (item.quantity || 1) * (item.paymentOption.price/item.paymentOption.quantity);
      gst = gst + (price * 0.18);
    });
    return gst.toFixed(2);
  }

  addRemoveProductCount(action, product) {
    if (product.quantity >= 500) {
      alert("Maximum quantity can be 100 at a time")
      return false;
    }
    if (action == 'add') {
      product.quantity = product.quantity + 1;
    } else {
      product.quantity = product.quantity - 1;
    }
    product.quantity <= 0 ? product.quantity = 1 : '';
    this.utilityService.setData("cItems", this.cartItems);
  }

  getSubTotal() {
    let total:any = 0;
    this.cartItems.forEach(item => {
      total = total + ((item.quantity) * (item.paymentOption.price / item.paymentOption.quantity));
    });
    total = total + Number(this.calculatTotalGST());
    return total.toFixed(2);
  }

  securityDeposit() {
    let sd = 0
    this.cartItems.forEach(item => {
      if (item.paymentOption.sName == 'subscribe') {
        sd = sd + (item.quantity || 1) * (item.paymentOption.price / item.paymentOption.quantity) * 2
      }
    });
    return sd;
  }

  getTotal() {
    return (Number(this.getSubTotal()) + Number(this.securityDeposit())).toFixed(2);
  }

  removeProduct(i) {
    this.cartItems.splice(i, 1);
    this.cartService.updateCart(this.cartItems);
  }

  goToCheckout() {
    this.utilityService.setData("cItems", this.cartItems);
    this.cartService.closeCartNav();
    this.router.navigate(['./checkout']);
  }

  goToShop() {
    this.cartService.closeCartNav();
    this.router.navigate(['./cart']);
  }

}