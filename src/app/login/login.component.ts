import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/AuthService';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string | undefined;
  password: string | undefined;
  errorMessage = "invalid credentials";
  successMessage: string | undefined;
  invalidLogin = false;
  loginSuccess = false;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {

  }

  handleLogin() {
    console.log('clicked');
  }
}
