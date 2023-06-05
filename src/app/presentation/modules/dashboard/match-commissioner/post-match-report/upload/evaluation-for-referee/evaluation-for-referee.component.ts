import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evaluation-for-referee',
  templateUrl: './evaluation-for-referee.component.html',
  styleUrls: ['./evaluation-for-referee.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EvaluationForRefereeComponent implements OnInit {

  step = 1

  constructor() {}

  ngOnInit(): void {}

  next() {
    if (this.step < 8) {
      this.step += 1;
    }
  }
}
