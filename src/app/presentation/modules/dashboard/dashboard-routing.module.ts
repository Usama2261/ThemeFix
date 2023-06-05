import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckRoleGuard } from 'src/app/core/guards/check-role.guard';
import { DataManagerGuard } from 'src/app/core/guards/data-manager.guard';
import { SuperAdminGuard } from 'src/app/core/guards/super-admin.guard';
import { TeamAdminGuard } from 'src/app/core/guards/team-admin.guard';
import { TeamManagerGuard } from 'src/app/core/guards/team-manager.guard';
import { AboutComponent } from './common/about/about.component';
import { CheckRouteComponent } from './common/check-route/check-route.component';
import { DashboardComponent } from './dashboard.component';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { NotificationsComponent } from './common/notifications/notifications.component';
import { LeagueDirectorGuard } from 'src/app/core/guards/league-director.guard';
import { GeneralCoordinatorGuard } from 'src/app/core/guards/general-coordinator.guard';
import { MatchCommissionerGuard } from 'src/app/core/guards/match-commissioner.guard';
import { RefereeGuard } from 'src/app/core/guards/referee.guard';
import { RefereeAssessorGuard } from 'src/app/core/guards/referee-assessor.guard';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'r/super-admin',
        canActivate: [SuperAdminGuard],
        loadChildren: () => import('./super-admin/super-admin.module').then(m => m.SuperAdminModule)
      },
      {
        path: 'r/team-admin',
        loadChildren: () => import('./team-admin/team-admin.module').then(m => m.TeamAdminModule),
        canActivate: [TeamAdminGuard]
      },
      {
        path: 'r/team-manager',
        loadChildren: () => import('./team-manager/team-manager.module').then(m => m.TeamManagerModule),
        canActivate: [TeamManagerGuard]
      },
      {
        path: 'r/referee',
        loadChildren: () => import('./referee/referee.module').then(m => m.RefereeModule),
        canActivate: [RefereeGuard]
      },
      {
        path: 'r/data-manager',
        loadChildren: () => import('./data-manager/data-manager.module').then(m => m.DataManagerModule),
        canActivate: [DataManagerGuard]
      },
      {
        path: 'r/league-director',
        loadChildren: () => import('./league-director/league-director.module').then(m => m.LeagueDirectorModule),
        canActivate: [LeagueDirectorGuard]
      },
      {
        path: 'r/general-coordinator',
        loadChildren: () => import('./general-coordinator/general-coordinator.module').then(m => m.GeneralCoordinatorModule),
        canActivate: [GeneralCoordinatorGuard]
      },
      {
        path: 'r/match-commissioner',
        loadChildren: () => import('./match-commissioner/match-commissioner.module').then(m => m.MatchCommissionerModule),
        canActivate: [MatchCommissionerGuard]
      },
      {
        path: 'r/referee',
        loadChildren: () => import('./referee/referee.module').then(m => m.RefereeModule),
        canActivate: [RefereeGuard]
      },
      {
        path: 'r/referee-assessor', loadChildren: () => import('./referee-assessor/referee-assessor.module').then(m => m.RefereeAssessorModule),
        canActivate: [RefereeAssessorGuard]
      },
      {
        path: 'notifications',
        component: NotificationsComponent
      },
      {
        path: 'about-us',
        component: AboutComponent
      },
      {
        path: 'settings',
        loadChildren: () => import('./common/settings/settings.module').then(m => m.SettingsModule),
      },
      {
        path: 'not-found',
        component: NotFoundComponent
      },
      {
        path: 'check-route',
        component: CheckRouteComponent,
        canActivate: [CheckRoleGuard]
      },
      {
        path: '',
        redirectTo: 'check-route',
        pathMatch: 'full'
      },
      {
        path: 'r',
        redirectTo: 'check-route',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
