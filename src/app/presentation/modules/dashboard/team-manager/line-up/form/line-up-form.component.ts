import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './line-up-form.component.html',
  styleUrls: ['./line-up-form.component.scss']
})
export class LineUpFormComponent implements OnInit {
  submitTab = false;
  step = 1
  disbleButton = false;
  constructor() { }

  ngOnInit(): void {
  }

  next() {
    if (this.step < 5) {
      this.step += 1;
    }
    //  else {
    //   this.submitTab = true;
    // }
    console.log( this.step);
    
    if(this.step == 5){

    }
  }
  checkedBox(val: boolean){
    if(val){
      this.disbleButton = true;
    }
  }
}
