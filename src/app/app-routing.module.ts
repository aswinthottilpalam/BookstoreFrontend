import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { GetallbooksComponent } from './component/getallbooks/getallbooks.component';

import { LoginComponentComponent } from './component/login-component/login-component.component';
import { OrderPlacedComponent } from './component/order-placed/order-placed.component';
import { OrderlistComponent } from './component/orderlist/orderlist.component';
import { QuickViewComponent } from './component/quick-view/quick-view.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { SignupComponentComponent } from './component/signup-component/signup-component.component';
import { WishlistComponent } from './component/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'login', component: LoginComponentComponent },
  { path: 'signup', component: SignupComponentComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password/:token', component: ResetPasswordComponent },
  { path: 'dashboard', component: DashboardComponent,
    children: [
      { path: 'books', component: GetallbooksComponent },
      { path: 'quick-view', component: QuickViewComponent },
      { path: 'cart', component: CartComponent },
      { path: 'wishlist', component: WishlistComponent },
      { path: 'orderlist', component: OrderlistComponent },
      { path: 'orderplaced', component: OrderPlacedComponent }
    ]
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
