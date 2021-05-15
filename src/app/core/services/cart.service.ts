import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cart: Product[] = [];
  constructor() { }

  public getCartDetails(

  ): Observable<{ success: boolean; content: Product[] }> {
    if (this.cart !== undefined) {
      return of({ success: true, content: this.cart });
    } else {
      return of({ success: false, content: this.cart });
    }
  }


  public addProduct(
    product: Product,
  ): Observable<{ success: boolean; content: Product[] }> {
    if (this.cart !== undefined) {
      const productExist = this.cart.find(
        (p) => p.id === product.id
      );
      if (productExist !== undefined) {
        productExist.quantity =
          productExist.quantity === 5 ? 5 : productExist.quantity + 1;
      } else {
        this.cart.push(product);
      }
      return of({ success: true, content: this.cart });
    } else {
      return of({ success: false, content: this.cart });
    }
  }


  public deleteProduct(
    id: number,
  ): Observable<{ success: boolean; content: Product[] }> {
    if (this.cart !== undefined) {
      const productToRemove = this.cart.find((p) => p.id === id);
      const index = productToRemove
        ? this.cart.indexOf(productToRemove)
        : -1;
      if (index !== -1) {
        this.cart.splice(index, 1);
      }
      return of({ success: true, content: this.cart });
    } else {
      return of({ success: false, content: this.cart });
    }
  }


  public increaseQuantity(id: number): Observable<{ success: boolean; content: Product[] }> {
    const index = this.cart.findIndex((c) => c.id === id);
    if (index !== -1) {
      this.cart[index].quantity = this.cart[index].quantity + 1;
      return of({ success: true, content: this.cart });
    }
  }
  public decreaseQuantity(id: number): Observable<{ success: boolean; content: Product[] }> {
    const index = this.cart.findIndex((c) => c.id === id);
    if (index !== -1) {
      if (this.cart[index].quantity > 0) {
        this.cart[index].quantity = this.cart[index].quantity - 1;
      }
      return of({ success: true, content: this.cart });
    }
  }

  public removeAllProducts(
  ): Observable<{ success: boolean; content: Product[] }> {
    if (this.cart !== undefined) {
      this.cart = [];
      return of({ success: true, content: this.cart });
    } else {
      return of({ success: false, content: null });
    }
  }
}
