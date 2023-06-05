import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChallengesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
