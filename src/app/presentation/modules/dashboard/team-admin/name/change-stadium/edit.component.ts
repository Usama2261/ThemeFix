import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, NgZone, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-team-name-change-stadium',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamNameChangeStadiumComponent implements OnInit {

  @Input() data!: any
  @Input() isNotEmbedded: boolean = true
  @Output() onCancel: EventEmitter<any> = new EventEmitter<any>();

  message: any = null

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
  }

  cancel() {
    this.onCancel.emit()
  }

  update() {
    this.message = {
      type: "success",
      title: "Success",
      message: "Update success"
    }
    this.resetMessage()
  }

  delete() {
    this.message = {
      type: "confirm",
      message: "Are you sure you want to delete this user?"
    }
    // this.resetMessage()
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
