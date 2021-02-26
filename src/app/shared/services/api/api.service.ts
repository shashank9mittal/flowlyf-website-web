import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from '../../../../environments/environment';
import { apiEndpoints } from './api.endpoints';
import { UtilityService } from '../utility/utility.service';

// we can now access environment.apiUrl
declare const $: any;
const API_URL = environment.apiUrl;
export let options = { headers: new HttpHeaders() };

//creating url 
function injectRestfullParams(_url_, paramObj) {
  var url = _url_;
  for (let i in paramObj) {
    url = url.replace(':' + i, paramObj[i]);
  };
  return url;
}


try {
  if (localStorage.getItem('flow_user') != "" && JSON.parse(localStorage.getItem('flow_user'))) {
    let flow_user = JSON.parse(localStorage.getItem('flow_user'));
    let header = new HttpHeaders().set('Authorization', flow_user.token);
    // let header = new HttpHeaders().set('Authorization', flow_user.token).set('version', '1.1');
    options.headers = header;
  }
} catch (error) {
  console.log(error);
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient, private router: Router, private utilityService: UtilityService) {

  }

  api(endpointName, body?: any, restfullParams?: Object, fullResponse?: any): Promise<any> {
    let config = apiEndpoints[endpointName];
    if (config === undefined) {
      let err = new Error('API ' + endpointName + ' not found in endpointConfig. Please check api.Endpoints');
      return;
    } else {
      config = JSON.parse(JSON.stringify(config));
      //Inject Restful params here.
      if (restfullParams) {
        config.url = injectRestfullParams(config.url, restfullParams);
      }
      config.url = API_URL + config.url;
    }

    return new Promise<any>((resolve, reject) => {
      if (config.method == 'post' || config.method == 'put') {
        this.http[config.method](config.url, body, options).subscribe(function (res) {
          resolve(success(res));
        }, err => {
          reject(error(err));
        })
      } else if (config.method == 'get' || config.method == 'delete') {
        this.http[config.method](config.url, options).subscribe(function (res) {
          resolve(success(res));
        }, err => {
          reject(error(err));
        })
      }
    });


    function success(response) {
      if (fullResponse) {
        return response;
      } else {
        return response;
      }
    }

    function error(response) {
      switch (response.status) {
        case 401:
          options.headers = new HttpHeaders();
          localStorage.removeItem('flow_user');
          if (this && this.router) {
            // window.location.href = window.location.origin + "/login";
          } else {
            // window.location.href = window.location.origin + "/login";
          }
          break;
        case 502:
          return response.error;
        case 0:
          if (response.name == "HttpErrorResponse" && response.statusText == "Unknown Error") {
            alert("Network Error!");
          }
          return response;
        default:
          return response.error;
      }
    }
  }
}