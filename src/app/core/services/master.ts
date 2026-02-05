import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/Constant';
import { map } from 'rxjs';
import { ApiResponseModel } from '../models/interface/api.mode';

@Injectable({
  providedIn: 'root',
})
export class Master {
  constructor(private http: HttpClient) {}

  getRoles() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_ROLES);
  }

  getDesignations() {
    return this.http
      .get<ApiResponseModel>(environment.API_URL + Constant.API_METHODS.MASTER.GET_ALL_DESIGNATION)
      .pipe(map((result: ApiResponseModel) => result.data));
  }
}
