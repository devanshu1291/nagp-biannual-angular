import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import {Product} from '../../core/models/Product';

@Component({
  selector: 'app-shopping-cart-container',
  templateUrl: './shopping-cart-container.component.html',
  styleUrls: ['./shopping-cart-container.component.scss']
})
export class ShoppingCartContainerComponent implements OnInit {

  totalPrice: number;
  cart: Product[]=[];

  constructor(private router: Router,
    private cartService: CartService, ) {
  }

  ngOnInit() {  
  }
  ngDoCheck(): void {
    this.cartService.getCartDetails().subscribe((response) => {
      if (response.success) {        
        this.cart = response.content;
        this.totalPrice = this.cart.reduce((count, curItem) => {
          return count + (curItem.quantity * curItem.price);
        }, 0);
      } 
      this.cart = response.content;
    });
      
  }
  checkout():void
  {
    if(this.cart.length!=0)
    this.router.navigate(['user/checkout']);
  }
  
}
