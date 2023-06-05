import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-tactics-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {

  toggleViewModal: Subject<boolean> = new Subject();
  toggleEditModal: Subject<boolean> = new Subject();
  editData: any
  viewData: any;

  table: InnerTable = {
    headers: [
      { name: 'Type of Formation', key: 'playFormation' },
      { name: 'Image of Formation', key: 'formationPic' , image: true } 
    ],
    data: [
      { id :1 ,playFormation: '4-3-3 Attack Minded', region: 'Region 1', team: 'Team 1' , formationPic:'assets/tactics/formation/formation1.jpeg' },
      {  id :1 ,playFormation: '4-3-3 Defense Minded', region: 'Region 2', team: 'Team 2' , formationPic:'assets/tactics/formation/formation2.jpeg'},
      { id :1 ,playFormation: '4-2-2 Diamond Midfield', formation: 'formation 3', region: 'Region 3', team: 'Team 3' , formationPic:'assets/tactics/formation/formation3.jpeg'},
      {  id :1 ,playFormation: '4-2-2 Flat Midfield',formation: 'formation 4', region: 'Region 4', team: 'Team 4' , formationPic:'assets/tactics/formation/formation4.jpeg'},
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
