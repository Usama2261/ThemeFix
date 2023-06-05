import { ChangeDetectionStrategy, ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'card-rule-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardRuleCreateComponent implements OnInit {

  message: any = null

  constructor(
    private zone: NgZone,
    private ref: ChangeDetectorRef
  ) { }

  toggleModal: Subject<boolean> = new Subject();

  ngOnInit(): void {
  }

  add() {
    this.message = {
      type: "success",
      title: "Success",
      message: "CardRule added successfully"
    }
    this.resetMessage()
  }

  closeModal() {
    this.toggleModal.next(true)
  }

  resetMessage() {
    this.zone.run(() => {
      setTimeout(() => {
        this.message = null
        this.ref.markForCheck()
      }, 1000);
    })
  }
}
