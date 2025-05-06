// src/app/login/login.component.ts
import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.credentials).subscribe(
      (response) => {
        console.log('Login successful', response);
        this.authService.saveToken(response.token);  // Save token to localStorage
        this.router.navigate(['/dashboard']);  // Redirect to dashboard or home page
      },
      (error) => {
        console.error('Login failed', error);
      }
    );
  }
}
