import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth-service.service';
import { People } from '../../models/People';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit{

  public people!: People;
  public loginFormGroup!: FormGroup;

  constructor(private authService: AuthService, private fb:FormBuilder, private router: Router) {
    this.loginFormGroup = this.fb.group({
      username: this.fb.control(''),
      password: this.fb.control('') 
    }
)

  }
  ngOnInit(): void {
    
  }

  login(){
    let email = this.loginFormGroup.value.username
    let password = this.loginFormGroup.value.password
    this.authService.Login(email, password).subscribe({
      next: value=>{
        this.people = value
        console.log(value)
        this.authService.authenticated = true;
        localStorage.setItem("authenticated", JSON.stringify(this.authService.authenticated))
        localStorage.setItem("people",JSON.stringify(this.people))
        this.router.navigateByUrl("/client");
      },
      error: err=>{
        this.authService.authenticated = false;
        console.log("err")
      }
    })
  }
  

}
