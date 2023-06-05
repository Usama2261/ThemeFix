import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './assign-officer.component.html',
  styleUrls: ['./assign-officer.component.scss']
})
export class AssignOfficerComponent implements OnInit {


  toggleAssignModal: Subject<boolean> = new Subject();

  assignData: any = null

  table: InnerTable = {
    headers: [
      { name: '', key: 'teams' },
      { name: 'Matches', key: 'matches' },
      { name: 'Score', key: 'score' },
      { name: 'Point', key: 'point' },
    ],
    data: [
      { teams: 'Team 1', matches: '2', score: '2-0', point: '4' },
      { teams: 'Team 2', matches: '2', score: '1-1', point: '3' },
      { teams: 'Team 3', matches: '2', score: '1-1', point: '3' },
      { teams: 'Team 4', matches: '2', score: '0-2', point: '0' },
      { teams: 'Team 5', matches: '2', score: '0-2', point: '0' },
    ],
    options: {
      checkboxes: true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  openModal() {
    this.toggleAssignModal.next(true)
  }

}
