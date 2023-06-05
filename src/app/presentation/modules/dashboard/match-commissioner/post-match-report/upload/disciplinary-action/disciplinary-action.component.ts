import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-disciplinary-action',
  templateUrl: './disciplinary-action.component.html',
  styleUrls: ['./disciplinary-action.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisciplinaryActionComponent implements OnInit {


  toggleModal: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }


  openModal() {
    this.toggleModal.next(true)
  }

}
