import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pitch-state',
  templateUrl: './pitch-state.component.html',
  styleUrls: ['./pitch-state.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PitchStateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
