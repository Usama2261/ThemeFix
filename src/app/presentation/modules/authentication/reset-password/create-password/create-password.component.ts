import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-password',
  templateUrl: './create-password.component.html',
  styleUrls: ['./create-password.component.scss'],
})
export class CreatePasswordComponent implements OnInit {
  tab: any = 0;
  password: any = '';
  passError: any = false;
  confirmPass: any = '';
  confirmPassError: any = false;
  constructor(private router: Router) {}

  ngOnInit(): void {}
  handleOTP_Request() {
    if (
      this.password &&
      this.password.length > 5 &&
      this.confirmPass &&
      this.confirmPass.length > 5
      && this.password === this.confirmPass
    ) {
      if (this.tab === 0) {
        this.tab = 1;
      } else {
        this.router.navigateByUrl('/authentication/login');
      }
    }
    else{
      this.passError = true
      this.confirmPassError = true
    }
  }
  handlePassword(val: any) {
    if (val && val.length > 5) {
      this.passError = false;
      this.password = val;
    } else {
      this.passError = true;
    }
  }
  handleConfirmPassword(val: any) {
    if (val && val.length > 5) {
      this.confirmPassError = false;
      this.confirmPass = val;
    } else {
      this.confirmPassError = true;
    }
  }
}
