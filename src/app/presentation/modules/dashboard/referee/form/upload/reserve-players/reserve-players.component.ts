import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reserve-players',
  templateUrl: './reserve-players.component.html',
  styleUrls: ['./reserve-players.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReservePlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
