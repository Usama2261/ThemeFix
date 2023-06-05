import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-results',
  templateUrl: './upload-results.component.html',
  styleUrls: ['./upload-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
