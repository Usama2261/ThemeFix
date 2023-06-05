import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubmitComponent implements OnInit {
  isChecked = false;
  @Output()
  checkBoxClick: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }
  ngOnInit(): void {
    if(this.isChecked){
      this.checkBoxClick.emit(true);
    }
  }
  

}
