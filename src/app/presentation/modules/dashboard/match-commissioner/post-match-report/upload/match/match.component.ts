import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
