import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class MatchDetailFormComponent implements OnInit {

  step = 1

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if(this.step == 6)return;
    if (this.step < 6) {
      this.step += 1;
    }
  }

}
