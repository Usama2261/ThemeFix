import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-duties',
  templateUrl: './duties.component.html',
  styleUrls: ['./duties.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DutiesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
