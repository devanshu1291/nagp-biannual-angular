import {Component, Input, OnInit} from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import {Product} from '../../core/models/Product';


@Component({
  selector: 'app-shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls: ['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent implements OnInit {

  @Input('product') product: Product;
  cart: Product[]=[];
  constructor( private cartService: CartService,) {
  }

  ngOnInit() {

 if(this.product.quantity==undefined)
 {
  this.product.quantity=1;
 }
  }

  onIncrementCartItem(): void {
    
    this.cartService.increaseQuantity(this.product.id).subscribe((response) => {
         
  });
} 
  onDecrementCartItem(): void {
    this.cartService.decreaseQuantity(this.product.id).subscribe((response) => {
     
 
});
  }
  onRemoveCartItem(): void {
    this.cartService.deleteProduct(this.product.id).subscribe((response) => {
     
}); 

}}
