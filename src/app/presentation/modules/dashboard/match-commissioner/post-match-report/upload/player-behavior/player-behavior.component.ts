import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-player-behavior',
  templateUrl: './player-behavior.component.html',
  styleUrls: ['./player-behavior.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PlayerBehaviorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
