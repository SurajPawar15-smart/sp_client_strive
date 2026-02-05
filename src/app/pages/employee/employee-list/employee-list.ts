import { Component, inject, OnInit, signal } from '@angular/core';
import { Employee } from '../../../core/services/employee';
import { IEmployeeList } from '../../../core/models/interface/employee.model';

@Component({
  selector: 'app-employee-list',
  imports: [],
  templateUrl: './employee-list.html',
  styleUrl: './employee-list.css',
})
export class EmployeeList implements OnInit {
  employeeService = inject(Employee);
  employeeList: IEmployeeList[] = [];
  isLoader = signal<boolean>(true);

  ngOnInit(): void {
    debugger;
    this.getAllEmployees();
  }
  getAllEmployees() {
    debugger;
    this.employeeService.getEmployee().subscribe({
      next: (result: any) => {
        this.employeeList = result.data;
        this.isLoader.set(false);
      },
      error: (err: any) => {},
    });
  }
}
