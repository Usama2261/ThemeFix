import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamManagerRoutingModule } from './team-manager-routing.module';
import { TeamManagerComponent } from './team-manager.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { HistoryComponent } from './history/history.component';
import { TeamManagerHistoryColumnsComponent } from './history/columns/columns.component';
import { TeamManagerHistoryFilterComponent } from './history/filter/filter.component';
import { TeamManagerUpcomingColumnsComponent } from './upcoming/columns/columns.component';
import { TeamManagerUpcomingFilterComponent } from './upcoming/filter/filter.component';
import { LineUpFormComponent } from './line-up/form/line-up-form.component';
import { LineUpDetailsComponent } from './line-up/details/line-up-details.component';
import { LineUpComponent } from './line-up/line-up.component';
import { DetailsComponent } from './line-up/form/details/details.component';
import { StartingPlayersComponent } from './line-up/form/starting-players/starting-players.component';
import { SubstitutionsComponent } from './line-up/form/substitutions/substitutions.component';
import { TeamLeadersComponent } from './line-up/form/team-leaders/team-leaders.component';
import { SubmitComponent } from './line-up/form/submit/submit.component';
import { PlayFormationComponent } from './line-up/form/play-formation/play-formation.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TeamManagerComponent,
    TeamManagerHistoryColumnsComponent,
    TeamManagerHistoryFilterComponent,
    TeamManagerUpcomingColumnsComponent,
    TeamManagerUpcomingFilterComponent,
    UpcomingComponent,
    HistoryComponent,
    LineUpFormComponent,
    LineUpDetailsComponent,
    LineUpComponent,
    DetailsComponent,
    StartingPlayersComponent,
    SubstitutionsComponent,
    TeamLeadersComponent,
    SubmitComponent,
    PlayFormationComponent
  ],
  imports: [
    CommonModule,
    TeamManagerRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class TeamManagerModule { }
