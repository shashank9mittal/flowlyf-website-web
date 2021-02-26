import { Injectable } from '@angular/core';
import { ApiService } from '../api/api.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private apiService: ApiService) { }

  getProfile() {
    return new Promise<any>((resolve, reject) => {
      this.apiService.api('profile').then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  };

  updateProfile(params: any) {
    return new Promise<any>((resolve, reject) => {
      this.apiService.api('updateProfile', params).then(res => {
        resolve(res);
      }, err => {
        reject(err);
      })
    });
  }
}
