import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username = '';
  password = '';
  error = '';

  constructor(private router: Router) {}

  login() {
    if (this.username === 'demo' && this.password === '1234') {
      localStorage.setItem('token', 'demo-auth');
      this.router.navigate(['/dashboard']);
    } else {
      this.error = 'Invalid credentials';
    }
  }
}
