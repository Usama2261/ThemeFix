import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-details',
  templateUrl: './upload-details.component.html',
  styleUrls: ['./upload-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
