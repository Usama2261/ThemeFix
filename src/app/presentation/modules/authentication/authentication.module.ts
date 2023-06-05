import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationComponent } from './authentication.component';
import { LogoutComponent } from './logout/logout.component';


@NgModule({
  declarations: [
    AuthenticationComponent,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
    FormsModule
  ]
})
export class AuthenticationModule { }
