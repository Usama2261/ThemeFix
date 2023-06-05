import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-match-commissioner-upcoming-columns',
  templateUrl: './columns.component.html',
  styleUrls: ['./columns.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchCommissionerUpcomingColumnsComponent implements OnInit {


  toggleDrawer: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  _toggleDrawer() {
    this.toggleDrawer.next(true)
  }

}
