import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.scss']
})
export class NameComponent implements OnInit {

  toggleEditModal: Subject<boolean> = new Subject();
  toggleViewModal: Subject<boolean> = new Subject();
  toggleChangeStadiumModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Player name', key: 'playername' },
      { name: 'Jersey', key: 'jersey' },
    ],
    data: [
      { playername: 'John Doe', jersey: '10' },
      { playername: 'John Doe 1', jersey: '10' },
      { playername: 'John Doe 2', jersey: '10' },
      { playername: 'John Doe 3', jersey: '10' },
      { playername: 'John Doe 4', jersey: '10' },
      { playername: 'John Doe 5', jersey: '10' },
      { playername: 'John Doe 6', jersey: '10' },
      { playername: 'John Doe 7', jersey: '10' },
      { playername: 'John Doe 8', jersey: '10' },
      { playername: 'John Doe 9', jersey: '10' },
      { playername: 'John Doe 10', jersey: '10' },
      { playername: 'John Doe 11', jersey: '10' },
    ],
    options: {
      edit: true,
      view: true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleView(e: any) {
    this.toggleViewModal.next(true)
  }

  handleEdit(e: any) {
    this.toggleEditModal.next(true)
  }

  handleChangeStadium(e: any) {
    this.toggleChangeStadiumModal.next(true)
  }

}
