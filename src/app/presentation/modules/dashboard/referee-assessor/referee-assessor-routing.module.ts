import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './form/details/details.component';
import { FormComponent } from './form/form.component';
import { UploadComponent } from './form/upload/upload.component';
import { RefereeAssessorHistoryComponent } from './history/history.component';
import { RefereeAssessorComponent } from './referee-assessor.component';
import { RefereeAssessorUpcomingComponent } from './upcoming/upcoming.component';

const routes: Routes = [
  {
    path: '',
    component: RefereeAssessorComponent,
    children: [
      {
        path: 'history',
        component: RefereeAssessorHistoryComponent
      },
      {
        path: 'upcoming',
        component: RefereeAssessorUpcomingComponent
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
        path: 'upload',
        component: UploadComponent
      },
      {
        path: 'details',
        component: DetailsComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RefereeAssessorRoutingModule { }
