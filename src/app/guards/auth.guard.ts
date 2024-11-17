import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../Services/auth-service.service';


@Injectable()
export class AuthGuard{
  constructor(private authService: AuthService, private router:Router) {
    
  }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
    let auth = localStorage.getItem("authenticated")
    if(auth != null){
      auth = JSON.parse(auth)
      console.log(auth)
      if(auth){
        return true
      }
    }
    this.router.navigateByUrl("/login") 
    return false
  }
}
