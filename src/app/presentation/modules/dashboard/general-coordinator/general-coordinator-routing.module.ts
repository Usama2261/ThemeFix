import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GeneralCoordinatorComponent } from './general-coordinator.component';
import { GeneralCoordinatorHistoryComponent } from './history/history.component';
import { MatchDetailDetailComponent } from './match-details/detail/detail.component';
import { MatchDetailFormComponent } from './match-details/form/form.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { GeneralCoordinatorUpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: GeneralCoordinatorComponent,
    children: [
      {
        path: 'history',
        component: GeneralCoordinatorHistoryComponent
      },
      {
        path: 'upcoming',
        component: GeneralCoordinatorUpcomingComponent
      },
      {
        path: '',
        redirectTo: 'upcoming',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'match-details',
    component: MatchDetailsComponent,
    children: [
      {
        path: 'form',
        component: MatchDetailFormComponent
      },
      {
        path: 'details',
        component: MatchDetailDetailComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneralCoordinatorRoutingModule { }
