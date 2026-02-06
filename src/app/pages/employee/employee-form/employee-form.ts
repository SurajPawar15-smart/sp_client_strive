import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../core/models/class/employee.model';
import { Employee } from '../../../core/services/employee';
import { Master } from '../../../core/services/master';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgFor, NgIf } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ApiResponseModel } from '../../../core/models/interface/api.mode';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, RouterLink, AsyncPipe, JsonPipe, NgIf, NgFor],
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

  roleList$: Observable<any> = new Observable<any>();
  designationList$: Observable<any> = new Observable<any>();
  currentEmpId: number = 0;

  constructor() {
    // this.activatedRoute.params.subscribe((res: any) => {
    //   debugger;
    //   this.currentEmpId = res.id;
    //   this.getEmployeeById();
    // })
  }
  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((res: any) => {
    //   debugger;
    //   this.currentEmpId = res.id;
    //   this.getEmployeeById();
    // })
    this.activatedRoute.params.subscribe((res: any) => {
      this.currentEmpId = +res['id'] || 0;

      if (this.currentEmpId > 0) {
        this.getEmployeeById();
      }
    });
    this.roleList$ = this.masterService.getRoles();
    this.designationList$ = this.masterService.getDesignations();
  }
  getEmployeeById() {
    debugger;
    if (this.currentEmpId != 0) {
      this.employeeService.getEmployeeById(this.currentEmpId).subscribe({
        next: (res: ApiResponseModel) => {
          debugger;
          this.employeeObj = res.data;
        },
      });
    }
  }

  // getAllRoles() {
  //   const roles = this.masterService.getRoles().subscribe({
  //     next: (res: any) => {
  //       this.roleList = res.data;
  //     },
  //   });
  //   this.subscriptionArray.push(roles);
  // }

  onSave() {
    debugger;
    console.log('Payload sending to API:', this.employeeObj);
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
