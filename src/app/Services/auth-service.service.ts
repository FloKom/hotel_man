import { Injectable } from '@angular/core';
import { People } from '../models/People';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user!: People;
  authenticated: Boolean;
  apiUrl: String;

  constructor(
    private http: HttpClient,
    private route: Router
  ) {
    this.authenticated = false
    this.apiUrl = environment.apiUrl + "/people"
  }


  public Login(email:string, password:string): Observable<People>{
    console.log({email,password})
    let date:number = Date.now();
    localStorage.setItem("date", JSON.stringify(date))
    return this.http.post<People>(`${this.apiUrl}/login`, {email,password});
  }

  public logout(){
    this.http.post(`${this.apiUrl}/logout`, { withCredentials: true }).subscribe(
      {
        next:res =>{
          console.log("Logout successful");
          this.authenticated = false
          localStorage.setItem("authenticated",JSON.stringify(false))
          localStorage.removeItem("people")
        },
        error:err =>{
          console.log(err);
        }
      }
    );
    this.route.navigateByUrl("/login");
  }
}
