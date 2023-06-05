import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostMatchReportComponent } from './post-match-report.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: PostMatchReportComponent,
    children: [
      { path: 'upload', component: UploadComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostMatchReportRoutingModule { }
