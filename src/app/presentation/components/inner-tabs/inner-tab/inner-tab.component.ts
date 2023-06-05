import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-tab',
  templateUrl: './inner-tab.component.html',
  styleUrls: ['./inner-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerTabComponent implements OnInit {

  @Input() active = false;
  @Input() name = "";
  constructor() { }

  ngOnInit(): void {
  }

}
