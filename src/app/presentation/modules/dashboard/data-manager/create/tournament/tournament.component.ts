import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-manager-create-tournament',
  templateUrl: './tournament.component.html',
  styleUrls: ['./tournament.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TournamentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
