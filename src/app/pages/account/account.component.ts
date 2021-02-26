import { AfterViewInit, Inject, PLATFORM_ID, OnDestroy } from '@angular/core';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';
import { Component, OnInit, ViewChild, HostListener } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
// sandbox
import { filter, map, mergeMap } from 'rxjs/operators';
import { Subscription } from 'rxjs';
import { AuthService } from '../../shared/services/auth/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('sidenav', { static: false }) sidenav: any;
  pageInfo: any = "Dashboard";
  public sidenavOpen = true;
  private subscription: Array<Subscription> = [];
  public links = [
    { name: 'Profile', href: 'profile', icon: 'info' },
    { name: 'Orders', href: 'orders', icon: 'add_shopping_cart' },
    { name: 'Logout', href: '/home', icon: 'power_settings_new' }
  ];

  constructor(
    public router: Router,
    public activatedRoute: ActivatedRoute,
    private authService: AuthService,
    @Inject(PLATFORM_ID) private platformId: Object,
  ) {
    // this.router.events
    //   .pipe(filter(event => event instanceof NavigationEnd))
    //   .pipe(map(() => this.activatedRoute))
    //   .pipe(
    //     map(route => {
    //       while (route.firstChild) {
    //         route = route.firstChild;
    //       }
    //       return route;
    //     })
    //   )
    //   .pipe(filter(route => route.outlet === 'primary'))
    //   .pipe(mergeMap(route => route.data))
    //   .subscribe(event => {
    //     console.log(event)
    //     this.pageInfo = event.breadcrumb || "Dashboard";
    //   });
  }

  ngOnInit() {
    if (window.innerWidth < 960) {
      this.sidenavOpen = false;
    }
  }
  // calls commonSandbox doSignout function for doing logout
  doLogOut(name) {
    if (name === 'Logout') {
      this.authService.logout();
      this.router.navigate(['/auth']);
    }
  }
  @HostListener('window:resize')
  public onWindowResize(): void {
    window.innerWidth < 960
      ? (this.sidenavOpen = false)
      : (this.sidenavOpen = true);
  }
  // subscribe the event  at finally
  ngAfterViewInit() {
    this.subscription.push(
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          if (window.innerWidth < 960) {
            this.sidenav.close();
          }
        }
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.forEach(each => {
      each.unsubscribe();
    });
  }
}
