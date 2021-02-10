import { LocalStorageService } from '../services/local-storage.service';
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private localStorageService: LocalStorageService, private router: Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    if(this.localStorageService.isLoggedIn()) {
      return this.localStorageService.getToken() !== null
    } else {
      debugger
      this.router.navigate(['/sign-in'])
      return false;
    }
  }

}
