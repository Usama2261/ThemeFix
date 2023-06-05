import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-tabs',
  templateUrl: './inner-tabs.component.html',
  styleUrls: ['./inner-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerTabsComponent implements OnInit {

  @Input() tabs: any[] = [];
  @Input() type: "dynamic"|"routed"= "routed";

  constructor() { }

  ngOnInit(): void {
  }

}
