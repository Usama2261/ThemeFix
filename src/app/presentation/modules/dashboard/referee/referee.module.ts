import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeRoutingModule } from './referee-routing.module';
import { RefereeComponent } from './referee.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { RefereeUpcomingComponent } from './upcoming/upcoming.component';
import { RefereeUpcomingColumnsComponent } from './upcoming/columns/columns.component';
import { RefereeUpcomingFilterComponent } from './upcoming/filter/filter.component';
import { RefereeHistoryComponent } from './history/history.component';
import { RefereeHistoryColumnsComponent } from './history/columns/columns.component';
import { RefereeHistoryFilterComponent } from './history/filter/filter.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './form/details/details.component';
import { UploadComponent } from './form/upload/upload.component';
import { UploadDetailsComponent } from './form/upload/upload-details/upload-details.component';
import { UploadResultsComponent } from './form/upload/upload-results/upload-results.component';
import { UploadOfficialsAndPlayersComponent } from './form/upload/upload-officials-and-players/upload-officials-and-players.component';
import { StartingPlayersComponent } from './form/upload/starting-players/starting-players.component';
import { ReservePlayersComponent } from './form/upload/reserve-players/reserve-players.component';
import { UploadGoalsComponent } from './form/upload/upload-goals/upload-goals.component';
import { UploadWarningsComponent } from './form/upload/upload-warnings/upload-warnings.component';
import { UploadExpulsionsComponent } from './form/upload/upload-expulsions/upload-expulsions.component';
import { SubstitutionsComponent } from './form/upload/substitutions/substitutions.component';
import { PreparationsAndConditionsComponent } from './form/upload/preparations-and-conditions/preparations-and-conditions.component';
import { FormaComponent } from './form/upload/preparations-and-conditions/forma/forma.component';
import { FormbComponent } from './form/upload/preparations-and-conditions/formb/formb.component';
import { FormcComponent } from './form/upload/preparations-and-conditions/formc/formc.component';
import { AssistantOfficialsComponent } from './form/upload/assistant-officials/assistant-officials.component';
import { UploadsSuggestionsComponent } from './form/upload/uploads-suggestions/uploads-suggestions.component';
import { IncidentReportsComponent } from './form/upload/incident-reports/incident-reports.component';
import { CreateTeamGoalComponent } from './form/upload/upload-goals/create-team-goal/create-team-goal.component';
import { EditTeamGoalComponent } from './form/upload/upload-goals/edit-team-goal/edit-team-goal.component';
import { SubEditComponent } from './form/upload/substitutions/sub-edit/sub-edit.component';
import { SubCreateComponent } from './form/upload/substitutions/sub-create/sub-create.component';


@NgModule({
  declarations: [
    RefereeComponent,
    RefereeUpcomingComponent,
    RefereeUpcomingColumnsComponent,
    RefereeUpcomingFilterComponent,
    RefereeHistoryComponent,
    RefereeHistoryColumnsComponent,
    RefereeHistoryFilterComponent,
    FormComponent,
    DetailsComponent,
    UploadComponent,
    UploadDetailsComponent,
    UploadResultsComponent,
    UploadOfficialsAndPlayersComponent,
    StartingPlayersComponent,
    ReservePlayersComponent,
    UploadGoalsComponent,
    UploadWarningsComponent,
    UploadExpulsionsComponent,
    SubstitutionsComponent,
    PreparationsAndConditionsComponent,
    FormaComponent,
    FormbComponent,
    FormcComponent,
    AssistantOfficialsComponent,
    UploadsSuggestionsComponent,
    IncidentReportsComponent,
    CreateTeamGoalComponent,
    EditTeamGoalComponent,
    SubEditComponent,
    SubCreateComponent
  ],
  imports: [
    CommonModule,
    RefereeRoutingModule,
    ComponentsModule
  ]
})
export class RefereeModule { }
