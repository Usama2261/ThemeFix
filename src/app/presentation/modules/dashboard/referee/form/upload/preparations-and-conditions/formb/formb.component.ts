import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formb',
  templateUrl: './formb.component.html',
  styleUrls: ['./formb.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormbComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
