import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreMatchReportComponent } from './pre-match-report.component';
import { UploadComponent } from './upload/upload.component';

const routes: Routes = [
  {
    path: '',
    component: PreMatchReportComponent,
    children: [
      { path: 'upload', component: UploadComponent }
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreMatchReportRoutingModule { }
