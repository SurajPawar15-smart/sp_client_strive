import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../core/models/class/employee.model';
import { Employee } from '../../../core/services/employee';
import { Master } from '../../../core/services/master';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ApiResponseModel } from '../../../core/models/interface/api.mode';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, RouterLink, AsyncPipe, JsonPipe],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit, OnDestroy {
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeService = inject(Employee);
  masterService = inject(Master);
  activatedRoute = inject(ActivatedRoute);

  roleList: any[] = [];
  designationList: any[] = [];

  subscriptionArray: Subscription[] = [];

  constructor() {}
  ngOnInit(): void {
    this.getAllRoles();
  }

  getAllRoles() {
    const roles = this.masterService.getRoles().subscribe({
      next: (res: any) => {
        this.roleList = res.data;
      },
    });
    this.subscriptionArray.push(roles);
  }

  onSave() {
    debugger;
    this.subscriptionArray.push(
      this.employeeService.createNewEmployee(this.employeeObj).subscribe({
        next: (response: ApiResponseModel) => {
          debugger;
          if (response.result) {
            alert('Employee Created Success');
          } else {
            alert(response.message);
          }
        },
        error: () => {
          debugger;
          alert('API Error');
        },
      }),
    );
  }

  ngOnDestroy(): void {
    this.subscriptionArray.forEach((element) => {
      element.unsubscribe();
    });
  }
}
