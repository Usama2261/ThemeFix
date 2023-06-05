import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload-warnings',
  templateUrl: './upload-warnings.component.html',
  styleUrls: ['./upload-warnings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadWarningsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
