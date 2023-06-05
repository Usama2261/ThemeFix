import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-discipline-and-control',
  templateUrl: './discipline-and-control.component.html',
  styleUrls: ['./discipline-and-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DisciplineAndControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
