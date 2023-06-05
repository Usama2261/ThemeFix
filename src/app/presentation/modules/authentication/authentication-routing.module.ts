import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationComponent } from './authentication.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  {
    path: '',
    component: AuthenticationComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
      },
      {
        path: 'reset-password',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
