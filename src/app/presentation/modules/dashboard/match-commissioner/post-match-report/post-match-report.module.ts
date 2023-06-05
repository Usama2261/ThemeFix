import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostMatchReportRoutingModule } from './post-match-report-routing.module';
import { PostMatchReportComponent } from './post-match-report.component';
import { UploadComponent } from './upload/upload.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { MatchComponent } from './upload/match/match.component';
import { GeneralDetailsComponent } from './upload/general-details/general-details.component';
import { MatchOfficialsComponent } from './upload/match-officials/match-officials.component';
import { MatchGoalsComponent } from './upload/match-goals/match-goals.component';
import { SubstitutionsComponent } from './upload/substitutions/substitutions.component';
import { DisciplinaryActionComponent } from './upload/disciplinary-action/disciplinary-action.component';
import { PlayerBehaviorComponent } from './upload/player-behavior/player-behavior.component';
import { PitchStateComponent } from './upload/pitch-state/pitch-state.component';
import { SportsConductionComponent } from './upload/sports-conduction/sports-conduction.component';
import { SecurityAndSafetyComponent } from './upload/security-and-safety/security-and-safety.component';
import { TreatmentComponent } from './upload/treatment/treatment.component';
import { MarketsAndInformationComponent } from './upload/markets-and-information/markets-and-information.component';
import { EvaluationForRefereeComponent } from './upload/evaluation-for-referee/evaluation-for-referee.component';
import { PersonalityComponent } from './upload/evaluation-for-referee/personality/personality.component';
import { FitnessComponent } from './upload/evaluation-for-referee/fitness/fitness.component';
import { LawsComponent } from './upload/evaluation-for-referee/laws/laws.component';
import { DutiesComponent } from './upload/evaluation-for-referee/duties/duties.component';
import { DisciplineAndControlComponent } from './upload/evaluation-for-referee/discipline-and-control/discipline-and-control.component';
import { FirstAssistantRefereePerfomanceComponent } from './upload/first-assistant-referee-perfomance/first-assistant-referee-perfomance.component';
import { FarpPersonalityComponent } from './upload/first-assistant-referee-perfomance/farp-personality/farp-personality.component';
import { FarpPositionAndMovementComponent } from './upload/first-assistant-referee-perfomance/farp-position-and-movement/farp-position-and-movement.component';
import { FarpAccuracyOfSignalsComponent } from './upload/first-assistant-referee-perfomance/farp-accuracy-of-signals/farp-accuracy-of-signals.component';
import { FarpMatchControlComponent } from './upload/first-assistant-referee-perfomance/farp-match-control/farp-match-control.component';
import { FarpTeamworkComponent } from './upload/first-assistant-referee-perfomance/farp-teamwork/farp-teamwork.component';
import { SecondAssistantRefereePerformanceComponent } from './upload/second-assistant-referee-performance/second-assistant-referee-performance.component';
import { SarpPersonalityComponent } from './upload/second-assistant-referee-performance/sarp-personality/sarp-personality.component';
import { SarpMatchControlComponent } from './upload/second-assistant-referee-performance/sarp-match-control/sarp-match-control.component';
import { SarpTeamworkComponent } from './upload/second-assistant-referee-performance/sarp-teamwork/sarp-teamwork.component';
import { SarpPositionAndMovementComponent } from './upload/second-assistant-referee-performance/sarp-position-and-movement/sarp-position-and-movement.component';
import { SarpAccuracyOfSignalsComponent } from './upload/second-assistant-referee-performance/sarp-accuracy-of-signals/sarp-accuracy-of-signals.component';
import { FourthOfficialPerformanceComponent } from './upload/fourth-official-performance/fourth-official-performance.component';
import { MatchHardshipAssessmentComponent } from './upload/match-hardship-assessment/match-hardship-assessment.component';
import { TeamDisciplineAssessmentComponent } from './upload/team-discipline-assessment/team-discipline-assessment.component';
import { FairPlayComponent } from './upload/fair-play/fair-play.component';
import { RemarksComponent } from './upload/remarks/remarks.component';
import { CreateGoalComponent } from './upload/match-goals/create-goal/create-goal.component';
import { EditGoalComponent } from './upload/match-goals/edit-goal/edit-goal.component';

@NgModule({
  declarations: [
    PostMatchReportComponent,
    UploadComponent,
    MatchComponent,
    GeneralDetailsComponent,
    MatchOfficialsComponent,
    MatchGoalsComponent,
    SubstitutionsComponent,
    DisciplinaryActionComponent,
    PlayerBehaviorComponent,
    PitchStateComponent,
    SportsConductionComponent,
    SecurityAndSafetyComponent,
    TreatmentComponent,
    MarketsAndInformationComponent,
    EvaluationForRefereeComponent,
    PersonalityComponent,
    FitnessComponent,
    LawsComponent,
    DutiesComponent,
    DisciplineAndControlComponent,
    FirstAssistantRefereePerfomanceComponent,
    FarpPersonalityComponent,
    FarpPositionAndMovementComponent,
    FarpAccuracyOfSignalsComponent,
    FarpMatchControlComponent,
    FarpTeamworkComponent,
    SecondAssistantRefereePerformanceComponent,
    SarpPersonalityComponent,
    SarpMatchControlComponent,
    SarpTeamworkComponent,
    SarpPositionAndMovementComponent,
    SarpAccuracyOfSignalsComponent,
    FourthOfficialPerformanceComponent,
    MatchHardshipAssessmentComponent,
    TeamDisciplineAssessmentComponent,
    FairPlayComponent,
    RemarksComponent,
    CreateGoalComponent,
    EditGoalComponent
  ],
  imports: [
    CommonModule,
    PostMatchReportRoutingModule,
    ComponentsModule
  ]
})
export class PostMatchReportModule { }
