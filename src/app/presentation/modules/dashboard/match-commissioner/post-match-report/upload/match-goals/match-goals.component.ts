import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-match-goals',
  templateUrl: './match-goals.component.html',
  styleUrls: ['./match-goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchGoalsComponent implements OnInit {

  toggleEditModal: Subject<boolean> = new Subject();
  toggleDeleteModal: Subject<boolean> = new Subject();

  editData: any;
  message: any = null

  table: InnerTable = {
    headers: [
      { name: 'Player', key: 'player' },
      { name: 'Type', key: 'type' },
      { name: 'Mnt', key: 'mnt' },
    ],
    data: [
      {player: 'SB 1', type: 'Scores', mnt: '76'},
      {player: 'SB 2', type: 'Cautions', mnt: '100'},
      {player: 'SB 3', type: 'Expulsion', mnt: '50'},
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
    console.log(e);
    
    this.toggleEditModal.next(true)
  }
  handleDelete(e: any) {
    this.toggleDeleteModal.next(true);
    this.message = {
      type: "confirm",
      message: "Are you sure you want to delete this Player?"
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
