import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ScheduleCallComponent } from '../schedule-call/schedule-call.component';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  cartItems: any;
  isLoggedIn: boolean = false;

  constructor(private cartService: CartService, private authService: AuthService, private router: Router, private dialog: MatDialog) {
    cartService.cartItems.subscribe(items => {
      this.cartItems = items && items.length ? items.length : '';
    });
    authService.isLoggedIn.subscribe(res => {
      this.isLoggedIn = res;
    })
  }

  ngOnInit() {
    // const Event = {
    //   TOGGLE_SHOW: 'show.bs.collapse',
    //   TOGGLE_HIDE: 'hide.bs.collapse',
    // };

    // const Selector = {
    //   CONTAINER: 'div.navbar-container',
    //   NAV: '.navbar-container > .navbar',
    // };

    // const ClassName = {
    //   TOGGLED_SHOW: 'navbar-toggled-show',
    // };

    // const container = document.querySelector(Selector.CONTAINER);
    // const nav = document.querySelector(Selector.NAV);
    // $(container).on(`${Event.TOGGLE_SHOW} ${Event.TOGGLE_HIDE}`, (evt) => {
    //   const action = `${evt.type}.${evt.namespace}` === Event.TOGGLE_SHOW ? 'add' : 'remove';
    //   console.log(action)
    //   nav.classList[action](ClassName.TOGGLED_SHOW);
    // });
  }

  openCartNav() {
    this.cartService.openCartNav();
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  scheduleCall() {
    if (window.innerWidth < 992) {
      $(".navbar-toggler").click();
    }
    let dialogRef = this.dialog.open(ScheduleCallComponent, {
      autoFocus: false
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
    });
    return false;
  }

}
