import { Component, inject } from '@angular/core';
import { User } from '../../core/services/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UserLogin } from '../../core/models/class/user.model';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  loginObj: UserLogin = {
    password: '',
    username: '',
  };
  userService = inject(User); //16 _auth agurd + inteceptor as arrow fun
  router = inject(Router);

  onLogin() {
    this.userService.onLogin(this.loginObj).subscribe({
      next: (response: any) => {
        const data = response.data.data;
        const strData = JSON.stringify(data);
        localStorage.setItem('clientStriveUser', strData);
        this.router.navigateByUrl('/employee-list');
      },
      error: (err: any) => {
        alert('Wrong user and password');
      },
    });
  }
}
