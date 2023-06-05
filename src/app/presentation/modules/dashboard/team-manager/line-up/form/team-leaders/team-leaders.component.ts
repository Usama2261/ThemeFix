import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-leaders',
  templateUrl: './team-leaders.component.html',
  styleUrls: ['./team-leaders.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamLeadersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
