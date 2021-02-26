import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }

  // function for storing the data in localStorage

  setData(key, data) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(key, JSON.stringify(data));
    } else {
      return null;
    }

  }

  // function for clearing the data in localStorage
  clearAllData() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.clear();
    } else {
      return null;
    }

  }

  // function for clearing particular key in localStorage
  clearData(key) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(key);
    } else {
      return null;
    }

  }

  // function for getting the data in localStorage
  getData(key) {
    if (isPlatformBrowser(this.platformId)) {
      // return JSON.parse(localStorage.getItem(key));
      try {
        return JSON.parse(localStorage.getItem(key));
      } catch (err) {
        return null;
      }
    } else {
      return null;
    }

  }
}
