import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AssignOfficerComponent } from './assign-officer/assign-officer.component';
import { DataManagerCurrentComponent } from './current/current.component';
import { DataManagerComponent } from './data-manager.component';
import { DataManagerHistoryComponent } from './history/history.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { DataManagerUpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: DataManagerComponent,
    children: [
      {
        path: 'history',
        component: DataManagerHistoryComponent
      },
      {
        path: 'current',
        component: DataManagerCurrentComponent
      },
      {
        path: 'upcoming',
        component: DataManagerUpcomingComponent
      },
      {
        path: '',
        redirectTo: 'upcoming',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: 'score-board',
    component: ScoreBoardComponent
  },
  {
    path: 'assign-officer',
    component: AssignOfficerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataManagerRoutingModule { }
