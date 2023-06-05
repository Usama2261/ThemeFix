import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginFormComponent implements OnInit {

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
