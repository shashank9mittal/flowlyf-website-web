import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private apiService: ApiService) { }

  getOrders() {
    return new Promise<any>((resolve, reject) => {
      this.apiService.api('getOrders').then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }

  getOrder(params) {
    return new Promise<any>((resolve, reject) => {
      this.apiService.api('getOrder', {}, params).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }
}
