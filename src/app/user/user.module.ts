import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginPageComponent } from './login-page/login-page.component';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TranslateModule } from '@ngx-translate/core';


@NgModule({
  declarations: [
    LoginPageComponent,
    CheckoutPageComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    TranslateModule.forChild({ extend: true }),
  ]
})
export class UserModule { }
