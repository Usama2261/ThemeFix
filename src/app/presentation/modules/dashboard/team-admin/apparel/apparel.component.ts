import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './apparel.component.html',
  styleUrls: ['./apparel.component.scss']
})
export class ApparelComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Apparel', key: 'apparel' },
      { name: 'Region', key: 'region' },
      { name: 'Team', key: 'team' },
    ],
    data: [
      { apparel: 'Apparel 1', region: 'Region 1', team: 'Team 1' },
      { apparel: 'Apparel 2', region: 'Region 2', team: 'Team 2' },
      { apparel: 'Apparel 3', region: 'Region 3', team: 'Team 3' },
      { apparel: 'Apparel 4', region: 'Region 4', team: 'Team 4' },
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
