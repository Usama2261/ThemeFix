import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Player name', key: 'playername' },
      { name: 'Jersey number', key: 'jerseynumber' },
      { name: 'Team', key: 'team' },
    ],
    data: [
      { playername: 'John Doe', jerseynumber: 2, team: 'Team 1' },
      { playername: 'John Doe', jerseynumber: 2, team: 'Team 1' },
      { playername: 'John Doe', jerseynumber: 2, team: 'Team 1' },
      { playername: 'John Doe', jerseynumber: 2, team: 'Team 1' },
      { playername: 'John Doe', jerseynumber: 2, team: 'Team 1' },
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
