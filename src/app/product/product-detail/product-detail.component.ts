import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/core/models/Product';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() public product: Product;
  
  constructor(private cartservice: CartService,private router:Router,private loginService:AuthenticationService,private notification:ToastrService) { }

  ngOnInit() {

    
  }

  onAddProductToCart(){
    
    this.cartservice.addProduct(this.product).subscribe((response) => {
    });
    if(this.loginService.isUserLoggedIn())
    {
      this.router.navigate(['products/cart']);
      this.notification.success('','Added To Cart',{timeOut:2000});
    }
    else
    {
      this.router.navigate(['user/login']);
      this.notification.warning('','Please Do login first',{timeOut:2000});
    }
   }

}
