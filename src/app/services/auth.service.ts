import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface AuthResponse {
  isAdmin: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn = false;
  private isAdmin = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    return this.http.post<AuthResponse>('http://localhost:8000/api/login/', { username, password })
      .pipe(
        tap(response => {
          this.isLoggedIn = true;
          this.isAdmin = response.isAdmin;
        })
      );
  }

  logout(): void {
    this.isLoggedIn = false;
    this.isAdmin = false;
  }

  get isLoggedInUser(): boolean {
    return this.isLoggedIn;
  }

  get isAdminUser(): boolean {
    return this.isAdmin;
  }
}
