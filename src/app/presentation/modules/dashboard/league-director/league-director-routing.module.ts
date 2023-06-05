import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LeagueDirectorCurrentComponent } from './current/current.component';
import { LeagueDirectorHistoryComponent } from './history/history.component';
import { LeagueDirectorComponent } from './league-director.component';
import { LeagueDirectorScoreBoardComponent } from './score-board/score-board.component';
import { LeagueDirectorUpcomingComponent } from './upcoming/upcoming.component';


const routes: Routes = [
  {
    path: '',
    component: LeagueDirectorComponent,
    children: [
      {
        path: 'history',
        component: LeagueDirectorHistoryComponent
      },
      {
        path: 'current',
        component: LeagueDirectorCurrentComponent
      },
      {
        path: 'upcoming',
        component: LeagueDirectorUpcomingComponent
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
    component: LeagueDirectorScoreBoardComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LeagueDirectorRoutingModule { }
