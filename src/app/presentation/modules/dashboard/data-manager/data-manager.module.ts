import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataManagerRoutingModule } from './data-manager-routing.module';
import { DataManagerComponent } from './data-manager.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { DataManagerHistoryComponent } from './history/history.component';
import { DataManagerHistoryColumnsComponent } from './history/columns/columns.component';
import { DataManagerHistoryFilterComponent } from './history/filter/filter.component';
import { DataManagerUpcomingComponent } from './upcoming/upcoming.component';
import { DataManagerUpcomingColumnsComponent } from './upcoming/columns/columns.component';
import { DataManagerUpcomingFilterComponent } from './upcoming/filter/filter.component';
import { DataManagerCurrentColumnsComponent } from './current/columns/columns.component';
import { DataManagerCurrentFilterComponent } from './current/filter/filter.component';
import { DataManagerCurrentComponent } from './current/current.component';
import { DataManagerCreateComponent } from './create/create.component';
import { TournamentComponent } from './create/tournament/tournament.component';
import { MatchComponent } from './create/match/match.component';
import { DataManagerViewMatchComponent } from './view/view.component';
import { DataManagerEditMatchComponent } from './edit/edit.component';
import { ScoreBoardComponent } from './score-board/score-board.component';
import { AssignOfficerComponent } from './assign-officer/assign-officer.component';
import { AssignOfficersFormComponent } from './assign-officer/assign-officers-form/assign-officers-form.component';
import { ViewMatchComponent } from './history/view/view.component';
import { ViewPositionComponent } from './history/position/view.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DataManagerComponent,
    DataManagerHistoryComponent,
    DataManagerHistoryColumnsComponent,
    DataManagerHistoryFilterComponent,
    DataManagerUpcomingComponent,
    DataManagerUpcomingColumnsComponent,
    DataManagerUpcomingFilterComponent,
    DataManagerCurrentComponent,
    DataManagerCurrentColumnsComponent,
    DataManagerCurrentFilterComponent,
    DataManagerCreateComponent,
    TournamentComponent,
    MatchComponent,
    DataManagerViewMatchComponent,
    DataManagerEditMatchComponent,
    ScoreBoardComponent,
    AssignOfficerComponent,
    AssignOfficersFormComponent,
    ViewMatchComponent,
    ViewPositionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    DataManagerRoutingModule,
    ComponentsModule
  ]
})
export class DataManagerModule { }
