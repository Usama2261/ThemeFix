import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-match-commissioner-history-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchCommissionerHistoryFilterComponent implements OnInit {


  toggleDrawer: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }

  _toggleDrawer() {
    this.toggleDrawer.next(true)
  }

}
