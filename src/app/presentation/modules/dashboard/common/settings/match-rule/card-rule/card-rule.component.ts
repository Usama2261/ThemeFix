import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-card-rule',
  templateUrl: './card-rule.component.html',
  styleUrls: ['./card-rule.component.scss']
})
export class CardRuleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toggleViewModal: Subject<boolean> = new Subject();
  toggleEditModal: Subject<boolean> = new Subject();
  editData: any
  viewData: any;

  table: InnerTable = {
    headers: [
      { name: 'Card Rule', key: 'cardrule' },
      
    ],
    data: [
      { id :1 ,cardrule: ' a yellow card is shown by the referee to indicate that a player has been officially cautioned. ' },
      {  id :1 ,cardrule: 'A green card is used in some sports to indicate an official warning to a player who has committed a minor offence that does not warrant a more serious sanction'},
      
    ],
    options: {
      edit: true,
      view: true
    }
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
