import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products/products.component';
import { ProductRoutingModule } from './product.routes';
import { PagesModule } from '../pages/pages.module';
import { ProductSliderComponent } from './product-slider/product-slider.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';
import { PaginationModule } from '../pagination/pagination.module';



@NgModule({
  declarations: [
    ProductDetailComponent,
    ProductListComponent,
    ProductsComponent,
    ProductSliderComponent,


  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    RouterModule,
    TranslateModule.forChild({ extend: true }),
    PaginationModule
  ],
  exports: [ProductsComponent, ProductDetailComponent , ProductListComponent, ProductSliderComponent]
})
export class ProductModule { }
