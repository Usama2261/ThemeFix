import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlayerComponent } from './player/player.component';
import { StadiumComponent } from './stadium/stadium.component';
import { SuperAdminComponent } from './super-admin.component';
import { TeamComponent } from './team/team.component';
import { UserComponent } from './user/user.component';
import { TacticsComponent } from './tactics/tactics.component';

const routes: Routes = [
  {
    path: '',
    component: SuperAdminComponent,
    children: [
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'player',
        component: PlayerComponent
      },
      {
        path: 'stadium',
        component: StadiumComponent
      },
      {
        path: 'tactics',
        component: TacticsComponent
      },
      {
        path: '',
        redirectTo: 'user',
        pathMatch: 'full'
      }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SuperAdminRoutingModule { }
