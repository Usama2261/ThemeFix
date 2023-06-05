import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-conditions',
  templateUrl: './conditions.component.html',
  styleUrls: ['./conditions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ConditionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
