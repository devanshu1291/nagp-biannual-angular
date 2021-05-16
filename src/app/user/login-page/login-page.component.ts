import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';
import { ToastrService } from 'ngx-toastr';
import { timeout } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  username = '';
  model: any = {};
  password = '';
  invalidLogin = false;
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private router: Router,
      private authenticationService: AuthenticationService,
      private notification: ToastrService,
      private readonly translate: TranslateService

    ) { }

  ngOnInit(): void {

  }

  login(): void  {
      if (this.authenticationService.authenticate(this.model.username, this.model.password)
       ) {
        this.router.navigate(['']);
        this.invalidLogin = false;
        this.translate.get('Login Sucessfully').subscribe((value) => {
          this.notification.success('',value, {timeOut: 2000});
        });
       
      } else {
        this.translate.get('Invalid Username or password').subscribe((value) => {
          this.notification.error('',value, {timeOut: 2000});
        });
      }
      this.invalidLogin = true;
    }
}
