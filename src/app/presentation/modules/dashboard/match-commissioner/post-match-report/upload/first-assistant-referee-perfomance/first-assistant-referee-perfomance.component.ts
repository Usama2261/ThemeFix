import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-assistant-referee-perfomance',
  templateUrl: './first-assistant-referee-perfomance.component.html',
  styleUrls: ['./first-assistant-referee-perfomance.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FirstAssistantRefereePerfomanceComponent implements OnInit {

  tab = 1

  constructor() { }

  ngOnInit(): void {
  }

}
