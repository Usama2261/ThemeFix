import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-menu',
  templateUrl: './inner-menu.component.html',
  styleUrls: ['./inner-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerMenuComponent implements OnInit {

  @Input() menus!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
