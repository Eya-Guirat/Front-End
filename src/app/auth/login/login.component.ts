import { Component } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginForm: FormGroup | undefined;

  constructor(
    private service: AuthService,
     private fb: FormBuilder
  ){ }

    ngOnInit(){
      this.loginForm = this.fb.group({
        email: ['', Validators.required],
        password: ['', Validators.required],
      })
    }



}
