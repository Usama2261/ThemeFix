import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fair-play',
  templateUrl: './fair-play.component.html',
  styleUrls: ['./fair-play.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FairPlayComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
