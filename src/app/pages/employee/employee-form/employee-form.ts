import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { EmployeeModel } from '../../../core/models/class/employee.model';
import { Employee } from '../../../core/services/employee';
import { Master } from '../../../core/services/master';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AsyncPipe, JsonPipe, NgIf } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { ApiResponseModel } from '../../../core/models/interface/api.mode';

@Component({
  selector: 'app-employee-form',
  imports: [FormsModule, AsyncPipe, JsonPipe, NgIf],
  templateUrl: './employee-form.html',
  styleUrl: './employee-form.css',
})
export class EmployeeForm implements OnInit, OnDestroy {
  employeeObj: EmployeeModel = new EmployeeModel();
  employeeService = inject(Employee);
  masterService = inject(Master);
  activatedRoute = inject(ActivatedRoute);

  //roleList: any[]=[];

  subscriptionArray: Subscription[] = [];

  roleList$: Observable<any> = new Observable<any>();
  designationList$: Observable<any> = new Observable<any>();
  currentEmpId: number = 0;

  constructor() {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((res: any) => {
      debugger;
      this.currentEmpId = res.id;
      this.getEMployeeById();
    });
    this.roleList$ = this.masterService.getRoles();
    this.designationList$ = this.masterService.getDesignations();
    //this.getAllRoles();
  }

  getEMployeeById() {
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
  //   const roles =  this.masterService.getRoles().subscribe({
  //     next:(res:any)=>{
  //       this.roleList = res.data;
  //     }
  //   });

  //   this.subscriptionArray.push(roles)
  // }
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
