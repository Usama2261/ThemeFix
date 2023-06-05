import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-laws',
  templateUrl: './laws.component.html',
  styleUrls: ['./laws.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LawsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
