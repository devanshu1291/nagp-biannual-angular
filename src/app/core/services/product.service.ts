import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';
import { Product } from '../models/Product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private PRODUCT_SERVICE_BASE_URL = '/assets/data/phones.json';

  constructor(private readonly http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
     const url = `${this.PRODUCT_SERVICE_BASE_URL}`;
     return this.http.get<Product[]>(url);
   }

   public getProduct(
    id: number
  ): Observable<{ success: boolean; content: Product }> {
    return this.http.get<Product[]>(this.PRODUCT_SERVICE_BASE_URL).pipe(
      map((products) => {
        const product = products.find((p) => p.id === id);
        if (product !== undefined) {
          return { success: true, content: product };
        } else {
          return { success: false, content: product };
        }
      })
    );
  }

}