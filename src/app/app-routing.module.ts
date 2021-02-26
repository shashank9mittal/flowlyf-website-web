import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { CheckoutGuard } from './shared/guard/checkout/checkout.guard';


const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      { path: '', pathMatch: 'full', redirectTo: 'home' },
      { path: 'home', loadChildren: './pages/home/home.module#HomeModule' },
      // { path: 'cart', loadChildren: './pages/cart/cart.module#CartModule' },
      { path: 'cart', loadChildren: './pages/cart-old/cart.module#CartModule' },
      // { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutModule', canActivate: [CheckoutGuard] },
      { path: 'contact', loadChildren: './pages/contact/contact.module#ContactModule' },
      { path: 'faq', loadChildren: './pages/faq/faq.module#FaqModule' },
      { path: 'flowdesk', loadChildren: './pages/flowdesk/flowdesk.module#FlowdeskModule' },
      { path: 'flowdeskgo', loadChildren: './pages/flowdesk-go/flowdesk-go.module#FlowdeskGoModule' },
      { path: 'pricing-plan', loadChildren: './pages/pricing-plan/pricing-plan.module#PricingPlanModule' },
      { path: 'privacy-policy', loadChildren: './pages/privacy-policy/privacy-policy.module#PrivacyPolicyModule' },
      { path: 'terms-of-use', loadChildren: './pages/terms-of-use/terms-of-use.module#TermsOfUseModule' },
      { path: 'about-us', loadChildren: './pages/about-us/about-us.module#AboutUsModule' },
      { path: 'blogs', loadChildren: './pages/blogs/blogs.module#BlogsModule' },
      // { path: 'auth', loadChildren: './pages/auth/auth.module#AuthModule' },
      // { path: 'account', loadChildren: './pages/account/account.module#AccountModule' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
