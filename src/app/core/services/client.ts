import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constants/Constant';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Client {
  constructor(private http: HttpClient) {}
  getClients() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.CLIENT.GET_ALL);
  }
}
