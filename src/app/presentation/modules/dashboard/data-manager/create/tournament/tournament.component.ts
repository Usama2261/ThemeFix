import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-data-manager-create-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TournamentComponent implements OnInit {

  tournament: Tournament = new Tournament();

  constructor(private dataManagerService: StateManagementService) {}

  ngOnInit(): void {}

  onCreate() {
    let model: any = {};
    model['name'] = this.tournament.name;
    model['year'] = this.tournament.startDate.substring(0, 4);

    this.dataManagerService.createTournament(model).subscribe((res: any) => {

    });
  }
}

export class Tournament{
  name: string = '';
  startDate: string = '';
  endDate: string = '';
}
