import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-league-director-menu',
  templateUrl: './league-director-menu.component.html',
  styleUrls: ['./league-director-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LeagueDirectorMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
