import { ChangeDetectionStrategy, Component, ElementRef, Input, OnInit, ViewChild, HostListener} from '@angular/core';
import { Subject } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'dash-app-modal',
  templateUrl: './dash-modal.component.html',
  styleUrls: [ './dash-modal.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashModalComponent implements OnInit {

  currentId: string = ""
  @Input() buttonClasses: string = ""
  @Input() isModelOpen: boolean = false
  @ViewChild('modelSwitch') modalSwitch!: ElementRef
  @Input() toggleModal!: Subject<any>;

  modalTop = 100;
  modalLeft=100;
  constructor() { }

  ngOnInit(): void {
    this.currentId = uuidv4()
    if (this.toggleModal) {
      this.toggleModal.subscribe(res => {
        this._toggleModal()
      })
    }
  }

/*
  @HostListener('mousemove', ['$event'])
   onMouseMove(event: MouseEvent) {
    this.modalTop = event.clientY - 10; // Adjust the offset as needed
    this.modalLeft = event.clientX - 10; // Adjust the offset as needed
  }
*/
  _toggleModal() {
    this.modalSwitch.nativeElement.click()
  }
}
