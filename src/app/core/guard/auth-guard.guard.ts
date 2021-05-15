import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {

  constructor(private router: Router,
              private authService: AuthenticationService) { }

 canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
    if (this.authService.isUserLoggedIn()) {
      return true;
    }

    this.router.navigate(['login']);
    return false;

  }
}
