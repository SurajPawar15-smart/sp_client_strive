import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Login } from './pages/login/login';
import { ClientData } from './pages/client/client-data/client-data';
import { EmployeeList } from './pages/employee/employee-list/employee-list';
import { EmployeeForm } from './pages/employee/employee-form/employee-form';
//import { authGuard } from './core/guards/auth-guard';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: Login },
  {
    path: '',
    component: Layout,
    children: [
      { path: 'client-list', component: ClientData },
      { path: 'employee-list', component: EmployeeList },
      { path: 'employee-form/:id', component: EmployeeForm },
    ],
  },
];
