import {ChangeDetectionStrategy,Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referee-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class FormDetailsComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }
}