import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RefereeAssessorRoutingModule } from './referee-assessor-routing.module';
import { RefereeAssessorComponent } from './referee-assessor.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { RefereeAssessorHistoryComponent } from './history/history.component';
import { RefereeAssessorHistoryColumnsComponent } from './history/columns/columns.component';
import { RefereeAssessorHistoryFilterComponent } from './history/filter/filter.component';
import { RefereeAssessorUpcomingComponent } from './upcoming/upcoming.component';
import { RefereeAssessorUpcomingColumnsComponent } from "./upcoming/columns/columns.component"
import { RefereeAssessorUpcomingFilterComponent } from "./upcoming/filter/filter.component";
import { FormComponent } from './form/form.component';
import { UploadComponent } from './form/upload/upload.component';
import { DetailsComponent } from './form/details/details.component';
import { AboutMatchComponent } from './form/upload/about-match/about-match.component';
import { RefereeTeamComponent } from './form/upload/referee-team/referee-team.component';
import { RefereeEvaluationComponent } from './form/upload/referee-evaluation/referee-evaluation.component';
import { PhysicalFitnessAndPositioningComponent } from './form/upload/physical-fitness-and-positioning/physical-fitness-and-positioning.component';
import { TeamworkEvaluationComponent } from './form/upload/teamwork-evaluation/teamwork-evaluation.component';
import { KeyPointsComponent } from './form/upload/key-points/key-points.component';
import { KeyPointsSecondRefComponent } from './form/upload/key-points-second-ref/key-points-second-ref.component';
import { KeyPointsFourthOfficialComponent } from './form/upload/key-points-fourth-official/key-points-fourth-official.component';
import { AdditionalRemarksComponent } from './form/upload/additional-remarks/additional-remarks.component';


@NgModule({
  declarations: [
    RefereeAssessorComponent,
    RefereeAssessorHistoryComponent,
    RefereeAssessorHistoryColumnsComponent,
    RefereeAssessorHistoryFilterComponent,
    RefereeAssessorUpcomingComponent,
    RefereeAssessorUpcomingColumnsComponent,
    RefereeAssessorUpcomingFilterComponent,
    FormComponent,
    UploadComponent,
    DetailsComponent,
    AboutMatchComponent,
    RefereeTeamComponent,
    RefereeEvaluationComponent,
    PhysicalFitnessAndPositioningComponent,
    TeamworkEvaluationComponent,
    KeyPointsComponent,
    KeyPointsSecondRefComponent,
    KeyPointsFourthOfficialComponent,
    AdditionalRemarksComponent
  ],
  imports: [
    CommonModule,
    RefereeAssessorRoutingModule,
    ComponentsModule
  ]
})
export class RefereeAssessorModule { }
