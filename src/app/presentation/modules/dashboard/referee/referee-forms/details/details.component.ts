import {ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RefereeDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}