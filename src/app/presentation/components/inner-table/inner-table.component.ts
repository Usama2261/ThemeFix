import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-inner-table',
  templateUrl: './inner-table.component.html',
  styleUrls: ['./inner-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerTableComponent implements OnInit {

  @Output()
  editClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  viewClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  uploadClick: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  mobileRowClicked: EventEmitter<any> = new EventEmitter<any>();
  @Output()
  deleteClick: EventEmitter<any> = new EventEmitter<any>();
  @Input()
  table!: InnerTable

  constructor() { }

  ngOnInit(): void {
  }

  onCustomColumnClick(e: any, action: any) {
    action.onClick(e);
  }

  onEditClick(e:any) {
    this.editClick.emit(e);
  }

  onViewClick(e:any) {
    this.viewClick.emit(e);
  }

  onUploadClick(e:any) {
    this.uploadClick.emit(e);
  }

  onDeleteClick(e:any) {
    this.deleteClick.emit(e);
  }

  _mobileRowClicked(data: any) {
    this.mobileRowClicked.emit(data);
  }
}
