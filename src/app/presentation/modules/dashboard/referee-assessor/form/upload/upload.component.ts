import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadComponent implements OnInit {

  step = 8

  constructor() {}

  ngOnInit(): void {}

  next() {
    if (this.step < 5) {
      this.step += 1;
    }
  }
}
