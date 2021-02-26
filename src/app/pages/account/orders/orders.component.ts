import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order/order.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  orders = [];

  constructor(private orderService: OrderService) {
    this.getOrders();
  }

  ngOnInit() {
  }

  private getOrders() {
    this.orderService.getOrders().then(res => {
      this.orders = res;
    }, err => {

    })

  }

  getInvoice(order) {
    
  }

}
