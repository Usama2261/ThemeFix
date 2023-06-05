import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MeetingsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
