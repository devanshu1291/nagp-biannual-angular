import { Component, DoCheck, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, DoCheck {
  loggedin: boolean;

  constructor(
    private loginService: AuthenticationService,
    private router: Router,
    public translate: TranslateService,
    private notification: ToastrService) { }

  ngOnInit(): void {

  }
  ngDoCheck(): void {
    if (this.loginService.isUserLoggedIn()) {
      this.loggedin = true;
    }
    else {
      this.loggedin = false;
    }
  }
  logout(): void {
    this.loginService.logOut();
    this.translate.get('Logged out Sucessfully').subscribe((value) => {
      this.notification.success('', value, { timeOut: 2000 });
    });
    this.router.navigate(['products']);
    this.loggedin = false;
  }
  login(): void {
    this.router.navigate(['user/login']);
  }
  cart(): void {
    if (this.loginService.isUserLoggedIn()) {
      this.router.navigate(['products/cart']);
    }
    else {
      this.translate.get('Please Do login first').subscribe((value) => {
        this.notification.warning('', value, { timeOut: 2000 });
      });
      this.router.navigate(['user/login']);
    }
  }


}