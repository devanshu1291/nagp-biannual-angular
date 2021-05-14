import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CartService } from 'src/app/core/services/cart.service';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.scss']
})
export class CheckoutPageComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder,private cartservice:CartService,private router:Router,private notification:ToastrService) { }
  
  ngOnInit() {
      this.registerForm = this.formBuilder.group({
        name: new FormControl('', [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(30),
        ]),
        mobile: new FormControl('', [
          Validators.required,
          Validators.pattern('^((\\+91-?)|0|91)?[0-9]{10}$'),
        ]),
        pincode: new FormControl('', [
           Validators.required,
           Validators.pattern('^[1-9][0-9]{5}$'),
         ]),
         address: new FormControl('', [
           Validators.required,
          Validators.minLength(5),
           Validators.maxLength(100),
         ]),
        email: ['', [Validators.required, Validators.email]],
         city: new FormControl('', [Validators.required]),
         state: new FormControl('', [Validators.required]),
      });
  }
  
  get f() { return this.registerForm.controls; }
  
  onSubmit() {
      this.submitted = true;
  
      if (this.registerForm.invalid) {
          return;
      }

      if (true) {
        if (this.registerForm.valid) {
          this.cartservice.removeAllProducts().subscribe((response) => {
            if (response.success) {
              this.router.navigate(['/products']);
              this.notification.success('','Your Order is Placed Successfully',{timeOut:2000});
            } else {
              localStorage.clear();
              this.router.navigate(['user/login']);
              
            }
          });
        } 
        else {
          this.registerForm.markAllAsTouched();
        }
      }
    } 
   
}
  