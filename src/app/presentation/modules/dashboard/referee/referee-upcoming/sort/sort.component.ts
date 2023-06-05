import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-upcoming-sort',
  templateUrl: './sort.component.html',
  styleUrls: ['./sort.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SortRefereeComponent implements OnInit {

  toggleDrawer: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {
  }
  _toggleDrawer() {
    this.toggleDrawer.next(true)
  }
}
