import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-incident-reports',
  templateUrl: './incident-reports.component.html',
  styleUrls: ['./incident-reports.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncidentReportsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
