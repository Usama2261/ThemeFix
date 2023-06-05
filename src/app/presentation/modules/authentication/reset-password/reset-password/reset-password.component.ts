import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss'],
})
export class ResetPasswordComponent implements OnInit {
  OTP_send: any = false;
  email: any = '';
  emailError: any = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleOTP_Request() {
    if (this.IsEmailVerified(this.email)) {
      this.OTP_send = true;
      setTimeout(() => {
        this.OTP_send = false;
        this.router.navigateByUrl(
          '/authentication/reset-password/create-password'
        );
      }, 2000);
    } else {
      this.emailError = true;
    }
  }
  IsEmailVerified(email: any) {
    const regex =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!email || regex.test(email) === false) {
      return false;
    }
    return true;
  }
  handleEmail(val: any) {
    if (this.IsEmailVerified(val)) {
      this.emailError = false;
      this.email = val;
    } else {
      this.emailError = true;
    }
  }
}
