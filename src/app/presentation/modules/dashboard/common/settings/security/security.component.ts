import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {

  
  toggleViewModal: Subject<boolean> = new Subject();
  toggleEditModal: Subject<boolean> = new Subject();
  editData: any
  viewData: any;

  table: InnerTable = {
    headers: [
      { name: 'Tactics', key: 'tactics' },
      { name: 'Play Formation', key: 'playFormation' },
      { name: 'Region', key: 'region' },
      { name: 'Team', key: 'team' },
    ],
    data: [
      { id :1 ,playFormation: '4-3-3 Attack Minded', region: 'Region 1', team: 'Team 1' , tacticsPic:'assets/tactics/tactics1.jpeg' },
      {  id :1 ,playFormation: '4-3-3 Defense Minded', region: 'Region 2', team: 'Team 2' , tacticsPic:'assets/tactics/tactics2.jpeg'},
      { id :1 ,playFormation: '4-2-2 Diamond Midfield', tactics: 'tactics 3', region: 'Region 3', team: 'Team 3' , tacticsPic:'assets/tactics/tactics3.jpeg'},
      {  id :1 ,playFormation: '4-2-2 Flat Midfield',tactics: 'tactics 4', region: 'Region 4', team: 'Team 4' , tacticsPic:'assets/tactics/tactics4.jpeg'},
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
activeTab: number = 1;

  activateTab(tab: number) {
    this.activeTab = tab;
  }
}
