import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  selector: 'app-upload-goals',
  templateUrl: './upload-goals.component.html',
  styleUrls: ['./upload-goals.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UploadGoalsComponent implements OnInit {
  toggleEditModal: Subject<boolean> = new Subject();
  toggleDeleteModal: Subject<boolean> = new Subject();

  editData: any;
  message: any = null

  table: InnerTable = {
    headers: [
      { name: 'Team', key: 'team' },
      { name: 'Player', key: 'player' },
      { name: 'Activity', key: 'activity' },
      { name: 'Mnt', key: 'mnt' },
      { name: 'Details', key: 'details' },
    ],
    data: [
      { team: 'Team 1', player: 'SB 1', activity: 'In', mnt: '76', details: 'Stadium tower' },
      { team: 'Team 2', player: 'SB 2', activity: 'Out', mnt: '100', details: 'Stadium tower' },
      { team: 'Team 1', player: 'SB 3', activity: 'In', mnt: '50', details: 'Stadium tower' },
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
