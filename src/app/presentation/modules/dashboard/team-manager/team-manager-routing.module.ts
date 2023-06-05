import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { LineUpDetailsComponent } from './line-up/details/line-up-details.component';
import { LineUpFormComponent } from './line-up/form/line-up-form.component';
import { LineUpComponent } from './line-up/line-up.component';
import { TeamManagerComponent } from './team-manager.component';
import { UpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: TeamManagerComponent,
    children: [
      {
        path: 'history',
        component: HistoryComponent
      },
      {
        path: 'upcoming',
        component: UpcomingComponent
      },
      {
        path: '',
        redirectTo: 'upcoming',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'line-up',
    component: LineUpComponent,
    children: [
      {
        path: 'form',
        component: LineUpFormComponent
      },
      {
        path: 'details',
        component: LineUpDetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamManagerRoutingModule {}
