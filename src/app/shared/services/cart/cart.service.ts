import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems = new BehaviorSubject([]);

  constructor(private utilityService: UtilityService) {
    let cart = utilityService.getData("cItems");
    this.cartItems.next(cart);
  }

  closeCartNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.querySelector(".screen-overlay").classList.remove('open')
  }

  openCartNav() {
    document.querySelector(".screen-overlay").classList.add('open')
    document.getElementById("mySidenav").style.width = "480px";
  }

  private findItemIncart(array, attr, value) {
    for (var i = 0; i < array.length; i += 1) {
      if (array[i].product[attr] === value) {
        return i;
      }
    }
    return -1;
  }

  addProductToCart(item) {
    let cart = this.utilityService.getData("cItems") || [];
    const isProductAlreadyExists = this.findItemIncart(cart, '_id', item.product._id);
    // if (isProductAlreadyExists >= 0) {
    //   cart[isProductAlreadyExists].quantity = cart[isProductAlreadyExists].quantity + 1;
    // } else {
    cart.push(item);
    // }
    this.cartItems.next(cart);
    this.utilityService.setData("cItems", cart);
  }

  updateCart(items) {
    this.utilityService.setData("cItems", items);
    this.cartItems.next(items);
  }
}
