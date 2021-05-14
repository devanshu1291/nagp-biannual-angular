import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardGuard } from '../core/guard/auth-guard.guard';
import { ProductDetailComponent } from '../product/product-detail/product-detail.component';
import { HomeComponent } from './home/home.component';
import { ProductViewDetailComponent } from './product-view-detail/product-view-detail.component';
import { ShoppingCartListPageComponent } from './shopping-cart-list-page/shopping-cart-list-page.component';

const routes: Routes = [ 
  {path: '', component: HomeComponent},
 {path: 'products', component: HomeComponent},
 {path: 'products/:id', component: ProductViewDetailComponent},
 {path: 'cart', component: ShoppingCartListPageComponent, canActivate: [AuthGuardGuard]}
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
