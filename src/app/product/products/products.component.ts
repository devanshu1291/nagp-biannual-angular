import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/Product';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CartService } from 'src/app/core/services/cart.service';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  @Input('product') product: Product;


  productId: number;
  products: Product[];
  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private router: Router,
    private loginService: AuthenticationService,
    private notification: ToastrService) { }

  ngOnInit(): void {

  }


  onAddProductToCart(): void {
    this.cartService.addProduct(this.product).subscribe((response) => {
    });
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['products/cart']);
      this.notification.success('', 'Added To Cart', { timeOut: 2000 });
    }
    else {
      this.router.navigate(['user/login']);
      this.notification.warning('', 'Please Do login first', { timeOut: 2000 });
    }
  }

}

