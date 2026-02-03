import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class User {
  constructor(private http: HttpClient) {}
  onLogin(obj: any) {
    return this.http.post(environment.API_URL + 'Login', obj);
  }
}
