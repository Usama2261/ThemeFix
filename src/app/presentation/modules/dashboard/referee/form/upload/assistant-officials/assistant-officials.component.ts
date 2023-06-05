import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assistant-officials',
  templateUrl: './assistant-officials.component.html',
  styleUrls: ['./assistant-officials.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssistantOfficialsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
