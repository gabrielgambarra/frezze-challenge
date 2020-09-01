import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/providers/services/auth.service';
import { Login } from 'src/app/providers/models/Login.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  login: Login = new Login();

  constructor(
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  makeLogin() {
    this.authService.login(this.login).subscribe(success => {
      if (success.token) {
        localStorage.setItem('token', success.token);
      }

      if (this.router.url.includes('login')) {
        this.router.navigate(['/home']);
      }
    },
    error => {
      alert("Login error, try again");
    });
  }

}
