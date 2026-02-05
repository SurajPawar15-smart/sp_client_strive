import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Constant } from '../constants/Constant';
import { environment } from '../../../environments/environment.development';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../models/interface/api.mode';
import { EmployeeModel } from '../models/class/employee.model';

@Injectable({
  providedIn: 'root',
})
export class Employee {
  constructor(private http: HttpClient) {}
  getEmployee(): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      environment.API_URL + Constant.API_METHODS.EMPLOYEE.GET_ALL,
    );
  }
  getEmployeeById(id: number): Observable<ApiResponseModel> {
    return this.http.get<ApiResponseModel>(
      `${environment.API_URL}${Constant.API_METHODS.EMPLOYEE.GET_EMPLOYEE_BY_ID}${id}`,
    );
  }
  createNewEmployee(obj: EmployeeModel) {
    return this.http.post<ApiResponseModel>(
      environment.API_URL + Constant.API_METHODS.EMPLOYEE.NEW_EMPLOYEE,
      obj,
    );
  }
}
