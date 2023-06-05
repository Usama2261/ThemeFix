import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee-evaluation',
  templateUrl: './referee-evaluation.component.html',
  styleUrls: ['./referee-evaluation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RefereeEvaluationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
