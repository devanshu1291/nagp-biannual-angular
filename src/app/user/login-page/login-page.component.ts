import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username = ''
  model: any = {};
  password = ''
  invalidLogin = false
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private notification :ToastrService
      
    ) { }

  ngOnInit() {
      
  }

  login() {
      if (this.authenticationService.authenticate(this.model.username, this.model.password)
       ) {
        this.router.navigate([''])
        this.invalidLogin = false
        this.notification.success('','login Sucessfully',{timeOut:2000});
      } else
        
        this.notification.error('','Invalid Username or password',{timeOut:2000});
        this.invalidLogin = true
    }
}
