import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreMatchReportRoutingModule } from './pre-match-report-routing.module';
import { PreMatchReportComponent } from './pre-match-report.component';
import { UploadComponent } from './upload/upload.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { MatchComponent } from './upload/match/match.component';
import { ConditionsComponent } from './upload/conditions/conditions.component';
import { OperationsComponent } from './upload/operations/operations.component';
import { CooperationsComponent } from './upload/cooperations/cooperations.component';
import { ColorComponent } from './upload/color/color.component';
import { IssueComponent } from './upload/issue/issue.component';
import { ChallengesComponent } from './upload/challenges/challenges.component';
import { FinalComponent } from './upload/final/final.component';


@NgModule({
  declarations: [
    PreMatchReportComponent,
    UploadComponent,
    MatchComponent,
    ConditionsComponent,
    OperationsComponent,
    CooperationsComponent,
    ColorComponent,
    IssueComponent,
    ChallengesComponent,
    FinalComponent
  ],
  imports: [
    CommonModule,
    PreMatchReportRoutingModule,
    ComponentsModule
  ]
})
export class PreMatchReportModule { }
