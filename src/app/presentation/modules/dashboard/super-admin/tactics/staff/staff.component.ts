import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-tactics-staff',
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {

  toggleViewModal: Subject<boolean> = new Subject();
  toggleEditModal: Subject<boolean> = new Subject();
  editData: any
  viewData: any;

  table: InnerTable = {
    headers: [
      { name: 'Medic', key: 'medic' },
      { name: 'Coach', key: 'coach' } ,
      { name: 'Assistant  Coach', key: 'assistantCoach' } ,
    ],
    data: [
      { id :1 ,medic: 'Jhon ', coach: 'Jimmy', team: 'Team 1' , assistantCoach:'Jackob ' },
      {  id :1 ,medic: 'Xavier ', coach: 'Xander', team: 'Team 2' , assistantCoach:'Xenia'},
      { id :1 ,medic: 'Paul',   coach: 'Parker', team: 'Team 3' , assistantCoach:'Pablo'},
      {  id :1 ,medic: 'Anthony', coach: 'Amber', team: 'Team 4' , assistantCoach:'Aster'},
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
