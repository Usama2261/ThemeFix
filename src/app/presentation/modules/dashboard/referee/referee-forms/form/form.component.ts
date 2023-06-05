import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  step=1

  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if (this.step < 13) {
      this.step += 1;
    }
  }
}
