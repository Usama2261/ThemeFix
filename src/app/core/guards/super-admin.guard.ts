import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { RoleRoute } from '../models/role-route.model';
import { Roles } from '../models/user.model';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminGuard implements CanActivate {
  constructor(
    private router: Router,
    private authService: AuthenticationService,
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if (this.authService.getUser()?.role === Roles.SUPER_ADMIN) {
      return true;
    } else {
      let correctRoute = (new RoleRoute).getRoute(this.authService.getUser()?.role);
      if (correctRoute) {
        this.router.navigate([correctRoute]);
      }else{
        this.router.navigate(['authentication/login']);
      }
      return false
    }
  }

}
