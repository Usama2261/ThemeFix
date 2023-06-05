import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { UnauthGuard } from './core/guards/unauth.guard';
import { LogoutComponent } from './presentation/modules/authentication/logout/logout.component';

const routes: Routes = [
  {
    path: 'authentication',
    loadChildren: () =>
      import(
        './presentation/modules/authentication/authentication.module'
      ).then((m) => m.AuthenticationModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'authentication/logout',
    component: LogoutComponent
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./presentation/modules/dashboard/dashboard.module').then((m) => m.DashboardModule),
    canActivate: [UnauthGuard],
  },
  {
    path: '',
    redirectTo: 'authentication/login',
    pathMatch: 'full',
  },
  { path: 'pre-match-report', loadChildren: () => import('./presentation/modules/dashboard/match-commissioner/pre-match-report/pre-match-report.module').then(m => m.PreMatchReportModule) },
  { path: 'post-match-report', loadChildren: () => import('./presentation/modules/dashboard/match-commissioner/post-match-report/post-match-report.module').then(m => m.PostMatchReportModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard, UnauthGuard],
})
export class AppRoutingModule { }
