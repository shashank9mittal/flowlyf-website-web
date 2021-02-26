import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { UtilityService } from '../../services/utility/utility.service';

@Injectable({
  providedIn: 'root'
})
export class CheckoutGuard implements CanActivate {
  
  constructor(private router: Router, private utilityService: UtilityService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    // your  logic goes here

    const cart = this.utilityService.getData("cItems");
    if (cart && cart.length) {
      return true;
    }
    this.router.navigate(['/cart']);
    return false
  }
}