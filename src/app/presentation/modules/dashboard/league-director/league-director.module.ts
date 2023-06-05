import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LeagueDirectorRoutingModule } from './league-director-routing.module';
import { LeagueDirectorComponent } from './league-director.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { LeagueDirectorCurrentComponent } from './current/current.component';
import { LeagueDirectorCurrentFilterComponent } from './current/filter/filter.component';
import { LeagueDirectorCurrentColumnsComponent } from './current/columns/columns.component';
import { LeagueDirectorHistoryColumnsComponent } from './history/columns/columns.component';
import { LeagueDirectorHistoryFilterComponent } from './history/filter/filter.component';
import { LeagueDirectorHistoryComponent } from './history/history.component';
import { LeagueDirectorUpcomingColumnsComponent } from './upcoming/columns/columns.component';
import { LeagueDirectorUpcomingFilterComponent } from './upcoming/filter/filter.component';
import { LeagueDirectorUpcomingComponent } from './upcoming/upcoming.component';
import { LeagueDirectorViewMatchComponent } from './view/view.component';
import { LeagueDirectorScoreBoardComponent } from './score-board/score-board.component';


@NgModule({
  declarations: [
    LeagueDirectorComponent,
    LeagueDirectorCurrentComponent,
    LeagueDirectorCurrentFilterComponent,
    LeagueDirectorCurrentColumnsComponent,
    LeagueDirectorHistoryComponent,
    LeagueDirectorHistoryFilterComponent,
    LeagueDirectorHistoryColumnsComponent,
    LeagueDirectorUpcomingComponent,
    LeagueDirectorUpcomingFilterComponent,
    LeagueDirectorUpcomingColumnsComponent,
    LeagueDirectorViewMatchComponent,
    LeagueDirectorScoreBoardComponent
  ],
  imports: [
    CommonModule,
    LeagueDirectorRoutingModule,
    ComponentsModule
  ]
})
export class LeagueDirectorModule { }
