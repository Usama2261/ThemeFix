import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-starting-players',
  templateUrl: './starting-players.component.html',
  styleUrls: ['./starting-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartingPlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
