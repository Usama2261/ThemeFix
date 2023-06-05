import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamAdminRoutingModule } from './team-admin-routing.module';
import { TeamAdminComponent } from './team-admin.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { NameComponent } from './name/name.component';
import { TeamNameColumnsComponent } from './name/columns/columns.component';
import { TeamNameCreateComponent } from './name/create/create.component';
import { TeamNameEditComponent } from './name/edit/edit.component';
import { TeamNameFilterComponent } from './name/filter/filter.component';
import { TeamNameViewComponent } from './name/view/view.component';
import { TeamNameChangeStadiumComponent } from './name/change-stadium/edit.component';
import { ApparelComponent } from './apparel/apparel.component';
import { StaffComponent } from './staff/staff.component';
import { ApparelColumnsComponent } from './apparel/columns/columns.component';
import { ApparelCreateComponent } from './apparel/create/create.component';
import { ApparelEditComponent } from './apparel/edit/edit.component';
import { ApparelFilterComponent } from './apparel/filter/filter.component';

import { StaffColumnsComponent } from './staff/columns/columns.component';
import { StaffCreateComponent } from './staff/create/create.component';
import { StaffEditComponent } from './staff/edit/edit.component';
import { StaffFilterComponent } from './staff/filter/filter.component';
import { StaffViewComponent } from './staff/view/view.component';

@NgModule({
  declarations: [
    TeamAdminComponent,
    NameComponent,
    TeamNameCreateComponent,
    TeamNameFilterComponent,
    TeamNameColumnsComponent,
    TeamNameEditComponent,
    TeamNameViewComponent,
    TeamNameChangeStadiumComponent,
    ApparelComponent,
    ApparelCreateComponent,
    ApparelEditComponent,
    ApparelFilterComponent,
    ApparelColumnsComponent,
    StaffComponent,
    StaffCreateComponent,
    StaffEditComponent,
    StaffFilterComponent,
    StaffColumnsComponent,
    StaffViewComponent,
  ],
  imports: [
    CommonModule,
    TeamAdminRoutingModule,
    ComponentsModule,
  ]
})
export class TeamAdminModule { }
