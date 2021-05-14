import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/core/services/authentication.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
loggedin:boolean;

  constructor(private loginService:AuthenticationService , private router:Router,public  translate: TranslateService,private notification:ToastrService) { }

  ngOnInit() {

  }
  ngDoCheck(): void {
    if(this.loginService.isUserLoggedIn())
{
  this.loggedin = true;
}
else
{
  this.loggedin = false;
}
  }
  logout()
  {  
  this.loginService.logOut();
  this.notification.success('','Logged out Sucessfully',{timeOut:2000});
  this.router.navigate(['products']);
  this.loggedin = false;
}
login()
  {
  this.router.navigate(['user/login']);
  }
  cart()
  {
    if(this.loginService.isUserLoggedIn())
    {
      this.router.navigate(['products/cart']);
    }
    else
    {
      this.notification.warning('','Please Do login first',{timeOut:2000});
      this.router.navigate(['user/login']);
    }
  } 

  
}