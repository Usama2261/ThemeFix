import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './staff.component.html',
  styleUrls: ['./staff.component.scss']
})
export class StaffComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  toggleViewModal: Subject<boolean> = new Subject();
  editData: any
  viewData: any

  table: InnerTable = {
    headers: [
      { name: 'ID', key: 'id' },
      { name: 'Name', key: 'name' },
      { name: 'Job Description', key: 'jobdescription' },
      { name: 'Signature', key: 'signature' },
    ],
    data: [
      { id: 'admin', name: 'Admin Admin Admin', firstName : 'Jon' , middleName : 'O' , lastName: 'Corner' , staffPic : 'assets/staff.jpg' ,  jobdescription: 'Medic' /*, mobile: '0123456789'*/ , signature : 'A.A. Admin' },
      { id: 'user', name: 'User Admin Admin',  firstName : 'Jon' , middleName : 'O' , lastName: 'Corner' , staffPic : 'assets/staff2.jpg' ,  jobdescription: 'Coach' /* , mobile: '0123456789'*/ , signature : 'U.A. Admin' },
    ],
    options: {
      edit: true,
      view : true
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

  handleEdit(e: any) {
	 this. editData=e;
    this.toggleEditModal.next(true)

  }
  handleView(e: any) {
	  this.viewData=e;
	  console.log( e);
    this.toggleViewModal.next(true)

  }
}
