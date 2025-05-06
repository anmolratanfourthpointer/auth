import { Component } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  user = {
    username: '',
    email: '',
    password: ''
  };

  constructor(private authService: AuthService, private router: Router , private toastr: ToastrService) {}

  onRegister() {
    this.authService.register(this.user).subscribe(
      
      (response) => {
        console.log('Registration successful', response);
        this.toastr.success('Registration successful!', 'Success');
        this.router.navigate(['/login']); 
      },
      (error) => {
        const errorMessage = error?.error?.msg || 'Registration failed, please try again';
        this.toastr.error(errorMessage, 'Error'); 
        console.error('Registration failed', error);
      }
    );
  }
}
