import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './stadium.component.html',
  styleUrls: ['./stadium.component.scss']
})
export class StadiumComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Stadium', key: 'stadium' },
      { name: 'Region', key: 'region' },
      { name: 'Team', key: 'team' },
    ],
    data: [
      { stadium: 'Stadium 1', region: 'Region 1', team: 'Team 1' },
      { stadium: 'Stadium 2', region: 'Region 2', team: 'Team 2' },
      { stadium: 'Stadium 3', region: 'Region 3', team: 'Team 3' },
      { stadium: 'Stadium 4', region: 'Region 4', team: 'Team 4' },
    ],
    options: {
      edit: true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleEdit(e: any) {
    this.toggleEditModal.next(true)

  }
}
