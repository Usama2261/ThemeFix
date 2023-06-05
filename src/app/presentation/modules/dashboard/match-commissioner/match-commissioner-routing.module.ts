import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatchCommissionerHistoryComponent } from './history/history.component';
import { MatchCommissionerComponent } from './match-commissioner.component';
import { MatchCommissionerUpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [

  {
    path: '',
    component: MatchCommissionerComponent,
    children: [
      {
        path: 'history',
        component: MatchCommissionerHistoryComponent
      },
      {
        path: 'upcoming',
        component: MatchCommissionerUpcomingComponent
      },
      {
        path: '',
        redirectTo: 'upcoming',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'pre-match-report',
    loadChildren: () => import('./pre-match-report/pre-match-report.module').then(m => m.PreMatchReportModule)
  },
  {
    path: 'post-match-report',
    loadChildren: () => import('./post-match-report/post-match-report.module').then(m => m.PostMatchReportModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchCommissionerRoutingModule { }
