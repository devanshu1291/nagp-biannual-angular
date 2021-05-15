import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild({ extend: true }),
  ],
  exports: [HeaderComponent, FooterComponent, PagenotfoundComponent]
})
export class SharedModule { }
