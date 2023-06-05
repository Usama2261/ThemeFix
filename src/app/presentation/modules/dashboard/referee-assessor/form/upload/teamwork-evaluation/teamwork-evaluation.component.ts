import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-teamwork-evaluation',
  templateUrl: './teamwork-evaluation.component.html',
  styleUrls: ['./teamwork-evaluation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamworkEvaluationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
