import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';
import { BehaviorSubject } from 'rxjs';
import { UtilityService } from '../utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn = new BehaviorSubject(false);

  constructor(private apiService: ApiService, private utilityService: UtilityService) {
    let flow_user = this.utilityService.getData("flow_user");
    if (flow_user && flow_user.token) {
      this.isLoggedIn.next(true);
    }
  }

  generateOtp(params) {
    return new Promise<any>((resolve, reject) => {
      this.apiService.api('generateOtp', params).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }

  signin(params) {
    return new Promise<any>((resolve, reject) => {
      this.apiService.api('signin', params).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }

  logout() {
    this.utilityService.clearData('flow_user');
    this.isLoggedIn.next(false);
  }
}
