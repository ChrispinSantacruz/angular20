import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private authService: AuthService, private router: Router) {}

  get isLoggedIn(): boolean {
    return this.authService.isLoggedInUser;
  }

  get isAdmin(): boolean {
    return this.authService.isAdminUser;
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
