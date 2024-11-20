import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  apiUrl:string;

  constructor(private http: HttpClient,
    private route: Router) {
      this.apiUrl = environment.apiUrl + "/booking"
    }
}
