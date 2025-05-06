import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { jwtDecode } from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:5000/api/auth';  // Backend API URL

  constructor(private http: HttpClient) {}

  
  register(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, user);
  }

  
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  
  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  // Logout by removing token
  logout(): void {
    localStorage.removeItem('authToken');
  }

  // Check if user is logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }

  getCurrentUser() {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        
        const decodedToken: any = jwtDecode(token);
        return decodedToken;  
      } catch (error) {
        console.error('Error decoding token', error);
        return null;
      }
    }
    return null;  
  }
}

