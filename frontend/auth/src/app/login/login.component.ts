// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router , private toastr: ToastrService) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.authService.saveToken(response.token); 
        this.toastr.success('You have successfully logged in!', 'Success');
        this.router.navigate(['/dashboard']);  // Redirect to dashboard or home page
      },
      (error) => {
        console.error('Login failed', error);
        const errorMessage = error?.error?.msg || 'Login failed, please check your credentials';
        this.toastr.error(errorMessage, 'Error');  
       

      }
    );
  }


}
