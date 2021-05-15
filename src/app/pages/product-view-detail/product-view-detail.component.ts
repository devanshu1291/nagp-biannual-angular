import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/core/models/Product';
import { ProductService } from 'src/app/core/services/product.service';

@Component({
  selector: 'app-product-view-detail',
  templateUrl: './product-view-detail.component.html',
  styleUrls: ['./product-view-detail.component.scss']
})
export class ProductViewDetailComponent implements OnInit {


  id: number;
  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService, private router: Router ) {
  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if (this.id !== null) {
      const pid = Number(this.id);
      this.productService.getProduct(pid).subscribe((response) => {
        if (response.success) {
          this.product = response.content;
        } else {
          this.router.navigate(['/products']);
        }
      });
    }


  }

}
