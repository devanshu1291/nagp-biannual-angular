import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShoppingCartContainerComponent } from './shopping-cart-container/shopping-cart-container.component';
import { ShoppingCartItemComponent } from './shopping-cart-item/shopping-cart-item.component';
import {CoreModule} from '../core/core.module';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [ShoppingCartContainerComponent, ShoppingCartItemComponent],
  imports: [
    CommonModule,
    CoreModule,
    TranslateModule.forChild({ extend: true }),
  ],
  exports: [ShoppingCartContainerComponent, ShoppingCartItemComponent]
})
export class ShoppingCartModule { }
