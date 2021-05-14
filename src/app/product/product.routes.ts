import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './product-list/product-list.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import { NgModule } from '@angular/core';


export const productRoutes: Routes = [

];
@NgModule({
  imports: [RouterModule.forChild(productRoutes)],
  exports: [RouterModule],
})
export class ProductRoutingModule {}