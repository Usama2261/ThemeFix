import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-name-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamNameViewComponent implements OnInit {

  @Input() data!: any

  message: any = null
  isEditing: boolean = false

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  edit() {
    this.isEditing = true
  }

  delete() {
    this.message = {
      type: "confirm",
      message: "Are you sure you want to delete this team?"
    }
    // this.resetMessage()
  }

  cancelEdit() {
    this.isEditing = false
  }

  reset() {
    this.message = {
      type: "error",
      title: "Oops!",
      message: "Something went wrong please try again later"
    }
    this.resetMessage()
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
