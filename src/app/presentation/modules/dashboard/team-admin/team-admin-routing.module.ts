import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NameComponent } from './name/name.component';
import { TeamAdminComponent } from './team-admin.component';
import { ApparelComponent } from './apparel/apparel.component';
import { StaffComponent } from './staff/staff.component';

const routes: Routes = [
  {
    path: '',
    component: TeamAdminComponent,
    children: [
      {
        path: 'name',
        component: NameComponent,
      },
      {
        path: 'apparel',
        component: ApparelComponent
      },
      {
        path: 'staff',
        component: StaffComponent
      },
      {
        path: '',
        redirectTo: 'name',
        pathMatch: 'full',
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TeamAdminRoutingModule { }
