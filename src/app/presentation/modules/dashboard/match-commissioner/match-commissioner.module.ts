import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchCommissionerRoutingModule } from './match-commissioner-routing.module';
import { MatchCommissionerComponent } from './match-commissioner.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { MatchCommissionerHistoryColumnsComponent } from './history/columns/columns.component';
import { MatchCommissionerHistoryComponent } from './history/history.component';
import { MatchCommissionerHistoryFilterComponent } from './history/filter/filter.component';
import { MatchCommissionerUpcomingComponent } from './upcoming/upcoming.component';
import { MatchCommissionerUpcomingFilterComponent } from './upcoming/filter/filter.component';
import { MatchCommissionerUpcomingColumnsComponent } from './upcoming/columns/columns.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    MatchCommissionerComponent,
    MatchCommissionerHistoryColumnsComponent,
    MatchCommissionerHistoryComponent,
    MatchCommissionerUpcomingComponent,
    MatchCommissionerUpcomingColumnsComponent,
    MatchCommissionerUpcomingFilterComponent,
    MatchCommissionerHistoryFilterComponent,
  ],
  imports: [
    CommonModule,
    MatchCommissionerRoutingModule,
    ComponentsModule,
    FormsModule
  ]
})
export class MatchCommissionerModule { }
