import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Bedroom } from '../models/Bedroom';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BedroomCategoryService {

  apiUrl:string;

  constructor(private http: HttpClient,
    private route: Router) {
      this.apiUrl = environment.apiUrl + "/bedroom"
    }
}
