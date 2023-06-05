import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  toggleViewModal: Subject<boolean> = new Subject();
  editData: any;
  viewData: any;

  table: InnerTable = {
    headers: [
      { name: 'Team Players', key: 'teamplayers' },
      { name: 'Region', key: 'region' },
      { name: 'Stadium', key: 'stadium' },
    ],
    data: [
      { teamplayers: 'Team 1', region: 'Region 1', stadium: 'Stadium 1' , pic : 'assets/team/team1.jpg' },
      {  teamplayers: 'Team 2', region: 'Region 2', stadium: 'Stadium 2', pic : 'assets/team/team2.jpg'  },
    ],
    options: {
      edit: true ,
      view : true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleEdit(e: any) {
    this.toggleEditModal.next(true)

  }
  handleView(e: any) {
	  this.viewData=e;
	  console.log( e);
    this.toggleViewModal.next(true)

  }
}
