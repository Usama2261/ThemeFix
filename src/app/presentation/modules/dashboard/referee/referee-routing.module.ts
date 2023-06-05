import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './form/details/details.component';
import { FormComponent } from './form/form.component';
import { UploadComponent } from './form/upload/upload.component';
import { RefereeHistoryComponent } from './history/history.component';
import { RefereeComponent } from './referee.component';
import { RefereeUpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes =
  [
    {
      path: '',
      component: RefereeComponent,
      children: [
        {
          path: 'history',
          component: RefereeHistoryComponent
        },
        {
          path: 'upcoming',
          component: RefereeUpcomingComponent
        },
        {
          path: '',
          redirectTo: 'upcoming',
          pathMatch: 'full'
        }
      ]
    },
    {
      path: 'form',
      component: FormComponent,
      children: [
        {
          path: 'details',
          component: DetailsComponent
        },
        {
          path: 'upload',
          component: UploadComponent
        }
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereeRoutingModule { }
