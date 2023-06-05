import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team-discipline-assessment',
  templateUrl: './team-discipline-assessment.component.html',
  styleUrls: ['./team-discipline-assessment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TeamDisciplineAssessmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
