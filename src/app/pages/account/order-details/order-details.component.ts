import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../../shared/services/order/order.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {

  constructor(private orderService: OrderService, private activatedRoute: ActivatedRoute) { }

  order: any;
  subs: any = [];

  ngOnInit() {
    this.getOrderDetails();
  }

  getOrderDetails() {
    const params = this.activatedRoute.snapshot.params;
    this.orderService.getOrder({ orderId: params.id }).then(res => {
      this.order = res.order;
      this.subs = res.subscriptionOrders;
      this.order['invoiceNo'] = this.invoiceNo();
      this.order['totalGST'] = this.calculatTotalGST();
      this.order['subTotal'] = this.getSubTotal();
      this.order.paymentType == 'subscription' ? this.order['securityDeposit'] = this.securityDeposit() : '';
      this.order['total'] = this.getTotal();
      console.log(this.order)
    }, err => {

    })
  }

  private invoiceNo() {
    if (this.order && this.order._id) {
      return this.order._id.substring(this.order._id.length - 10)
    }
    return "---";
  }

  private calculatTotalGST() {
    let gst = 0;
    this.order.orderedProducts.forEach(item => {
      const price = (item.quantity) * (item.productPrice / item.productQuantity);
      gst = gst + (price * 0.18);
    });
    return gst.toFixed(2);
  }

  private getSubTotal() {
    let total = 0;
    this.order.orderedProducts.forEach(item => {
      total = total + ((item.quantity) * (item.productPrice / item.productQuantity));
    });
    return (total + Number(this.calculatTotalGST())).toFixed(2);
  }

  private securityDeposit() {
    let sd = 0
    this.order.orderedProducts.forEach(item => {
      sd = sd + (item.quantity) * (item.productPrice / item.productQuantity) * 2
    });
    return sd;
  }

  private getTotal() {
    return (Number(this.getSubTotal()) + (this.order.paymentType == 'subscription' ? Number(this.securityDeposit()) : 0)).toFixed(2);
  }

}
