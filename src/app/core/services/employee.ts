import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constants/Constant';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  constructor(private http: HttpClient) {}
  getEmployee() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_ALL);
  }
}
