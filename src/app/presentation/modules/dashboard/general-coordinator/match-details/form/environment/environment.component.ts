import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-environment',
  templateUrl: './environment.component.html',
  styleUrls: ['./environment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EnvironmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
