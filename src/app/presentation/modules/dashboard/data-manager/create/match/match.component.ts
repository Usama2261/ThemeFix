import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatchEvent } from 'src/app/core/models/matchEvent.model';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-data-manager-create-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MatchComponent implements OnInit {
  matchEvent: MatchEvent = new MatchEvent();

  constructor(private dataManagerService: StateManagementService) {}

  ngOnInit(): void {}

  onCreate() {
    let model: any = {};
    model['away_team'] = this.matchEvent.away_team;
    model['city'] = this.matchEvent.city,
    model['date'] = this.matchEvent.date,
    model['home_team'] = this.matchEvent.home_team,
    model['round'] = this.matchEvent.round,
    model['stadium'] = this.matchEvent.stadium,
    model['tournament'] = this.matchEvent.tournament,
    model['venue'] = this.matchEvent.venue;
    this.dataManagerService.createMatchEvent(model).subscribe((res: any) => {
      alert(res.message);
    });
  }
}


