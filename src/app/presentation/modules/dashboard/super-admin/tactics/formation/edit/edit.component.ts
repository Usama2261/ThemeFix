import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, NgZone, OnInit } from '@angular/core';

@Component({
  selector: 'app-formation-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormationEditComponent implements OnInit {

  @Input() data!: any

  message: any = null

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
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
