import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {

  step = 9

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if (this.step < 5) {
      this.step += 1;
    }
  }
}
