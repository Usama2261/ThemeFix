import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SuperAdminRoutingModule } from './super-admin-routing.module';
import { SuperAdminComponent } from './super-admin.component';
import { ComponentsModule } from 'src/app/presentation/components/components.module';
import { UserComponent } from './user/user.component';
import { TeamComponent } from './team/team.component';
import { StadiumComponent } from './stadium/stadium.component';
import { TacticsComponent } from './tactics/tactics.component';
import { PlayerComponent } from './player/player.component';
import { UserColumnsComponent } from './user/columns/columns.component';
import { UserCreateComponent } from './user/create/create.component';
import { UserFilterComponent } from './user/filter/filter.component';
import { UserEditComponent } from './user/edit/edit.component';
import { TeamCreateComponent } from './team/create/create.component';
import { TeamFilterComponent } from './team/filter/filter.component';
import { TeamColumnsComponent } from './team/columns/columns.component';
import { TeamEditComponent } from './team/edit/edit.component';
import { TeamViewComponent } from './team/view/view.component';
import { PlayerColumnsComponent } from './player/columns/columns.component';
import { PlayerCreateComponent } from './player/create/create.component';
import { PlayerEditComponent } from './player/edit/edit.component';
import { PlayerFilterComponent } from './player/filter/filter.component';
import { StadiumColumnsComponent } from './stadium/columns/columns.component';
import { StadiumCreateComponent } from './stadium/create/create.component';
import { StadiumEditComponent } from './stadium/edit/edit.component';
import { StadiumFilterComponent } from './stadium/filter/filter.component';
import { TacticsColumnsComponent } from './tactics/columns/columns.component';
import { TacticsCreateComponent } from './tactics/create/create.component';
import { TacticsEditComponent } from './tactics/edit/edit.component';
import { TacticsFilterComponent } from './tactics/filter/filter.component';
import { TacticsViewComponent } from './tactics/view/view.component';
import { FormationComponent } from './tactics/formation/formation.component';
import { FormationColumnsComponent } from './tactics/formation/columns/columns.component';
import { FormationCreateComponent } from './tactics/formation/create/create.component';
import { FormationEditComponent } from './tactics/formation/edit/edit.component';
import { FormationFilterComponent } from './tactics/formation/filter/filter.component';
import { FormationViewComponent } from './tactics/formation/view/view.component';
import { PositionComponent } from './tactics/position/position.component';
import { PositionColumnsComponent } from './tactics/position/columns/columns.component';
import { PositionCreateComponent } from './tactics/position/create/create.component';
import { PositionEditComponent } from './tactics/position/edit/edit.component';
import { PositionFilterComponent } from './tactics/position/filter/filter.component';
import { PositionViewComponent } from './tactics/position/view/view.component';
import { StaffComponent } from './tactics/staff/staff.component';
import { StaffColumnsComponent } from './tactics/staff/columns/columns.component';
import { StaffCreateComponent } from './tactics/staff/create/create.component';
import { StaffEditComponent } from './tactics/staff/edit/edit.component';
import { StaffFilterComponent } from './tactics/staff/filter/filter.component';
import { StaffViewComponent } from './tactics/staff/view/view.component';


@NgModule({
  declarations: [
    SuperAdminComponent,
    UserComponent,
    TeamComponent,
    StadiumComponent,
    PlayerComponent,
    TacticsComponent,
    FormationComponent,
    UserColumnsComponent,
    UserCreateComponent,
    UserFilterComponent,
    UserEditComponent,
    TeamCreateComponent,
    TeamFilterComponent,
    TeamColumnsComponent,
    TeamEditComponent,
    TeamViewComponent,
    PlayerCreateComponent,
    PlayerFilterComponent,
    PlayerColumnsComponent,
    PlayerEditComponent,
    StadiumCreateComponent,
    StadiumFilterComponent,
    StadiumColumnsComponent,
    StadiumEditComponent,
    TacticsColumnsComponent,
    TacticsCreateComponent,
    TacticsEditComponent,
    TacticsFilterComponent,
    TacticsViewComponent,
    FormationColumnsComponent,
    FormationCreateComponent,
    FormationEditComponent,
    FormationFilterComponent,
    FormationViewComponent,
    PositionComponent ,
    PositionColumnsComponent ,
    PositionCreateComponent ,
    PositionEditComponent ,
    PositionFilterComponent ,
    PositionViewComponent ,
    StaffComponent ,
    StaffColumnsComponent ,
    StaffCreateComponent ,
    StaffEditComponent ,
    StaffFilterComponent ,
    StaffViewComponent ,
  
  ],
  imports: [
    CommonModule,
    SuperAdminRoutingModule,
    ComponentsModule
  ]
})
export class SuperAdminModule { }
