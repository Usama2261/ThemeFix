import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  error: string | null = null

  loginForm = new FormGroup({
    email: new FormControl('superadmin@dimbaa.com', [
      Validators.required,
      Validators.email
    ]),
    password: new FormControl('password', [
      Validators.required,
      Validators.minLength(8)
    ]),
  })

  constructor(
    public loginService: AuthenticationService) { }

  ngOnInit(): void { }

  login() {
    this.loginService.login(this.loginForm.value);
  };

  get email() { return this.loginForm.get('email') }
  get password() { return this.loginForm.get('password') }
}
