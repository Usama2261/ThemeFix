import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-referee-team',
  templateUrl: './referee-team.component.html',
  styleUrls: ['./referee-team.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefereeTeamComponent implements OnInit {

  toggleModal: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  _toggleModal() {
    this.toggleModal.next(true)
  }

}
