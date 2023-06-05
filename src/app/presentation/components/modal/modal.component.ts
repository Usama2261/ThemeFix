import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ModalComponent implements OnInit {

  currentId: string = ""
  @Input() buttonClasses: string = ""
  @Input() isModelOpen: boolean = false
  @ViewChild('modelSwitch') modalSwitch!: ElementRef
  @Input() toggleModal!: Subject<any>;

  constructor() { }

  ngOnInit(): void {
    this.currentId = uuidv4()
    if (this.toggleModal) {
      this.toggleModal.subscribe(res => {
        this._toggleModal()
      })
    }
  }

  _toggleModal() {
    this.modalSwitch.nativeElement.click()
  }
}
