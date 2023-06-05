import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-substitutions',
  templateUrl: './substitutions.component.html',
  styleUrls: ['./substitutions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubstitutionsComponent implements OnInit {

  toggleEditModal: Subject<boolean> = new Subject();
  toggleDeleteModal: Subject<boolean> = new Subject();

  editData: any;
  message: any = null

  table: InnerTable = {
    headers: [
      { name: 'Player', key: 'player' },
      { name: 'Time', key: 'time' },
    ],
    data: [
      { player: 'Player 1', time: '55'},
      { player: 'Player 2', time: '46'},
      { player: 'Player 1', time: '46'},
    ],
    options: {
      edit: true,
      delete: true
    }
  }

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  handleEdit(e: any) {
    this.toggleEditModal.next(true)
  }
  handleDelete(e: any) {
    this.toggleDeleteModal.next(true);
    this.message = {
      type: "confirm",
      message: "Are you sure you want to delete this user?"
    }
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null
        this.ref.markForCheck()
      }, 1000);
    })
  }

  handleConfirm(e: any) {
    if (e) {
      this.message = {
        type: "success",
        title: "Success",
        message: "Item deleted successfully"
      }
      this.resetMessage()
    } else {
      this.message = null
    }
  }

}
