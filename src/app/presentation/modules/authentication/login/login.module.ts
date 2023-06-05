import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { LoginFormComponent } from './login-form/login-form.component';
console.warn('Home1 page loaded');

@NgModule({
  declarations: [LoginComponent, LoginFormComponent],
  imports: [CommonModule, LoginRoutingModule, FormsModule, ReactiveFormsModule],
})
export class LoginModule {}
