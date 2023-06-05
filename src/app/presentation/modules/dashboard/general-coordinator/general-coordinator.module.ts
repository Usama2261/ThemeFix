import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneralCoordinatorRoutingModule } from './general-coordinator-routing.module';
import { GeneralCoordinatorComponent } from './general-coordinator.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { GeneralCoordinatorHistoryColumnsComponent } from './history/columns/columns.component';
import { GeneralCoordinatorHistoryFilterComponent } from './history/filter/filter.component';
import { GeneralCoordinatorHistoryComponent } from './history/history.component';
import { GeneralCoordinatorUpcomingColumnsComponent } from './upcoming/columns/columns.component';
import { GeneralCoordinatorUpcomingFilterComponent } from './upcoming/filter/filter.component';
import { GeneralCoordinatorUpcomingComponent } from './upcoming/upcoming.component';
import { MatchDetailsComponent } from './match-details/match-details.component';
import { MatchDetailFormComponent } from './match-details/form/form.component';
import { MatchDetailDetailComponent } from './match-details/detail/detail.component';
import { DetailComponent } from './match-details/form/detail/detail.component';
import { ResultsComponent } from './match-details/form/results/results.component';
import { MatchOfficialsComponent } from './match-details/form/match-officials/match-officials.component';
import { MeetingsComponent } from './match-details/form/meetings/meetings.component';
import { ConditionsComponent } from './match-details/form/conditions/conditions.component';
import { EnvironmentComponent } from './match-details/form/environment/environment.component';


@NgModule({
  declarations: [
    GeneralCoordinatorComponent,
    GeneralCoordinatorHistoryComponent,
    GeneralCoordinatorHistoryFilterComponent,
    GeneralCoordinatorHistoryColumnsComponent,
    GeneralCoordinatorUpcomingComponent,
    GeneralCoordinatorUpcomingFilterComponent,
    GeneralCoordinatorUpcomingColumnsComponent,
    MatchDetailsComponent,
    MatchDetailFormComponent,
    MatchDetailDetailComponent,
    DetailComponent,
    ResultsComponent,
    MatchOfficialsComponent,
    MeetingsComponent,
    ConditionsComponent,
    EnvironmentComponent,
  ],
  imports: [
    CommonModule,
    GeneralCoordinatorRoutingModule,
    ComponentsModule
  ]
})
export class GeneralCoordinatorModule { }
