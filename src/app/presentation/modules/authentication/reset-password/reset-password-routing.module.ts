import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: ResetPasswordComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      },
      {
        path: 'create-password',
        loadChildren: () => import('./create-password/create-password.module').then(m => m.CreatePasswordModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ResetPasswordRoutingModule {}
