import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  step = 1

  constructor() {}

  ngOnInit(): void {}

  next() {
    if (this.step < 8) {
      this.step += 1;
    }
  }
}
