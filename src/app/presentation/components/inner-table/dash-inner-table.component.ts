import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'dash-app-inner-table',
  templateUrl: './dash-inner-table.component.html',
  styleUrls: ['./dash-inner-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashInnerTableComponent implements OnInit {

  @Output()
  editClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  viewClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  uploadClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  mobileRowClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  formMouseEnter: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  formMouseLeave: EventEmitter<any> = new EventEmitter<any>();

  @Input()
  table!: InnerTable

  constructor() { }

  ngOnInit(): void {
  }

  onCustomColumnClick(e: any, action: any) {
    console.log( e);
    action.onClick(e);
  }

  onEditClick(e:any) {
    console.log( e);
    this.editClick.emit(e);
  }

  onViewClick(e:any) {
    console.log( e);
    this.viewClick.emit(e);
  }

  onUploadClick(e:any) {
    console.log( e);
    this.uploadClick.emit(e);
  }
  onMouseEnter( e:any ) {
	  console.log(e);
	   this.formMouseEnter.emit(e);
  }
  onMouseLeave( e:any ) {
	  console.log(e);
	   this.formMouseLeave.emit(e);
  }

  _mobileRowClicked(data: any) {
    console.log( data);
    this.mobileRowClicked.emit(data);
  }
  toggleItem(item: any) {
    item.expanded = !item.expanded;
  }

  items = [
    { title: '', content: 'Content 1', expanded: false } 
   
  ];

  calculateMultiplesOf5(start: number, end: number): number[] {
    const multiples = [1];
    for (let i = start; i <= end; i++) {
      if (i % 5 === 0) {
        multiples.push(i);
      }
    }
    return multiples;
  }
}
