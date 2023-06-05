import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreatePasswordComponent } from './create-password.component';
import { CreatePasswordRoutingModule } from './create-password-routing.module';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [CreatePasswordComponent],
  imports: [CommonModule, CreatePasswordRoutingModule, FormsModule],
})
export class CreatePasswordModule {}
