import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Username', key: 'username' },
      { name: 'Fullname', key: 'fullname' },
      { name: 'Role', key: 'role' },
      { name: 'Mobile', key: 'mobile' },
    ],
    data: [
      { username: 'admin', fullname: 'Admin', role: 'Admin', mobile: '0123456789' },
      { username: 'user', fullname: 'User', role: 'User', mobile: '0123456789' },
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

  handleViewMobile(event: any) {
    console.log(event);

  }
}
