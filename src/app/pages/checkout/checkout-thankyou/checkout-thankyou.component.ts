import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../../../shared/services/cart/cart.service';

@Component({
  selector: 'app-checkout-thankyou',
  templateUrl: './checkout-thankyou.component.html',
  styleUrls: ['./checkout-thankyou.component.scss']
})
export class CheckoutThankyouComponent implements OnInit {

  orderId:any;
  constructor(private cartService: CartService, private activatedRoute: ActivatedRoute) { 
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.orderId = params.orderId;
    });
  }

  ngOnInit() {
    this.cartService.updateCart([]);
  }

}
