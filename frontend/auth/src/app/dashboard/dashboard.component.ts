import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService  } from '../service/auth.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  user:any
  constructor(private router: Router , private authService:AuthService) {}
  
  ngOnInit(): void {

    this.user = this.authService.getCurrentUser();
    console.log(this.user);
  }
  logout() {
    
    localStorage.removeItem('token');
   
    this.router.navigate(['/login']);
  }
}
