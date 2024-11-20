import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bedroom } from '../models/Bedroom';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BedroomService {

  apiUrl:string;

  constructor(private http: HttpClient,
    private route: Router) {
      this.apiUrl = environment.apiUrl + "/bedroom"
    }

  public getBedrooms():Observable<Bedroom[]>{
    return this.http.get<Bedroom[]>(`${this.apiUrl}`)
  }

  public getBedroom():Observable<Bedroom>{
    return this.http.get<Bedroom>(`${this.apiUrl}`)
  }

}
