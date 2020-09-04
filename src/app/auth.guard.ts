import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router, NavigationStart } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router:Router){
    
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url: string = state.url;
      return this.checkLogin(url);
  }

  checkLogin(redirectUrl){
    console.log("redirectUrl---->>",redirectUrl)
    if(localStorage.getItem('token')){
      return true;
    }else{
      if(redirectUrl.split('?')[1]){
          if(redirectUrl.split('?')[1].split('=')[0] == 'addToFav'){
              console.log("true -->>",redirectUrl)
              this.router.navigate(["login"],{queryParams:{url : redirectUrl }})
          }else{
              this.router.navigate(['/login'])
          }
        }else{
            this.router.navigate(['/login'])
      }
    }
  }
  
}
