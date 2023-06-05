import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-officials',
  templateUrl: './match-officials.component.html',
  styleUrls: ['./match-officials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MatchOfficialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
