import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { brands } from 'src/app/core/data/brands';
import { Product } from 'src/app/core/models/Product';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  productId: number;
  products: Product[];
  productcat: Product[];
  productsave: Product[] = [];
  productnew: Product[] = [];
  searchword: '';
  brands = brands;
  brandItemsCount;
  constructor(
    private productService: ProductService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private cartService: CartService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
      this.productnew = this.products;
    });
    this.productService.getProducts().subscribe((response) => {
      this.products = response;
      const counts = {};
      response.forEach(p => {
        counts[p.brand] = counts[p.brand] + 1 || 1;
      });
      this.brandItemsCount = counts;
    });
  }
  onChangeSelectBox(e): void {
    const name: string = e.target.name;
    const value = e.target.checked;
    this.productcat = this.productnew;
    if (value) {
      this.productcat = this.productcat.filter((p) => p.brand === name);
      this.productsave = this.productsave.concat(this.productcat);
      this.products = this.productsave;
    }
    else {
      this.productcat = this.productcat.filter((p) => p.brand === name);
      this.productsave = this.productsave.filter((item) => !this.productcat.includes(item));
      this.products = this.productsave;
    }
    if (this.products.length === 0) {
      this.products = this.productnew;
    }
  }
  searchProduct(): void {
    if (this.searchword.trim() !== '') {
      this.products = this.productnew.filter(
        (p) =>
          p.title.toLocaleLowerCase().includes(this.searchword) ||
          p.description.toLocaleLowerCase().includes(this.searchword));
    }
  }
}