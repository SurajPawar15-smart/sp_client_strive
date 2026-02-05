import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Constant } from '../constants/Constant';

@Injectable({
  providedIn: 'root',
})
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAllClientProject() {
    return this.http.get(environment.API_URL + Constant.API_METHODS.PROJECT.GET_ALL_PROJECT);
  }
}
