import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-tactics-position',
  templateUrl: './position.component.html',
  styleUrls: ['./position.component.scss']
})
export class PositionComponent implements OnInit {

  toggleViewModal: Subject<boolean> = new Subject();
  toggleEditModal: Subject<boolean> = new Subject();
  editData: any
  viewData: any;

  table: InnerTable = {
    headers: [
      { name: 'Category', key: 'category' },
      { name: 'Sub Category', key: 'subcategory' } 
    ],
    data: [
      { id :1 ,category: 'Defender ', region: 'Region 1', team: 'Team 1' , subcategory:'Right wingback ' },
      {  id :1 ,category: 'Defender ', region: 'Region 2', team: 'Team 2' , subcategory:'Right wingback'},
      { id :1 ,category: 'Defender', position: 'position 3', region: 'Region 3', team: 'Team 3' , subcategory:'Right wingback'},
      {  id :1 ,category: 'Defender',position: 'position 4', region: 'Region 4', team: 'Team 4' , subcategory:'Right wingback'},
    ],
    options: {
      edit: true,
      view: true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleEdit(e: any) {
    this.editData=e;
    this.toggleEditModal.next(true)

  }
  handleView(e: any) {
    this.viewData=e;
    console.log( e);
this.toggleViewModal.next(true)

}

}
