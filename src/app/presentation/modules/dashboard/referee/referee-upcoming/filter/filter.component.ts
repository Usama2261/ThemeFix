import { Component, OnInit,ChangeDetectionStrategy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-upcoming-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilterComponent implements OnInit {

  toggleDrawer: Subject<boolean> = new Subject();

  constructor() { }

  ngOnInit(): void {}

  _toggleDrawer() {
    this.toggleDrawer.next(true)
  }

}
