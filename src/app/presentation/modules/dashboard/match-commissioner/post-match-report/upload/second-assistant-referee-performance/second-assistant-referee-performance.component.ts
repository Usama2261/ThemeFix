import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-assistant-referee-performance',
  templateUrl: './second-assistant-referee-performance.component.html',
  styleUrls: ['./second-assistant-referee-performance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondAssistantRefereePerformanceComponent implements OnInit {

  tab = 1

  constructor() { }

  ngOnInit(): void {
  }

}
