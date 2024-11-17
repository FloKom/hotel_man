import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth-service.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent {
  constructor(private authservice:AuthService) {
    
  }

  public logout(){
    this.authservice.logout()
  }
}
