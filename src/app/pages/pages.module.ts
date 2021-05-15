import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { ShoppingCartListPageComponent } from './shopping-cart-list-page/shopping-cart-list-page.component';
import { ProductModule } from '../product/product.module';
import { RouterModule } from '@angular/router';
import { ProductViewDetailComponent } from './product-view-detail/product-view-detail.component';
import { ShoppingCartModule } from '../shopping-cart/shopping-cart.module';


@NgModule({
  declarations: [
    HomeComponent,
    ShoppingCartListPageComponent,
    ProductViewDetailComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    PagesRoutingModule,
    ProductModule,
    ShoppingCartModule,

  ],
})
export class PagesModule { }
