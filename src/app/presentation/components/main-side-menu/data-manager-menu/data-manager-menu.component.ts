import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-manager-menu',
  templateUrl: './data-manager-menu.component.html',
  styleUrls: ['./data-manager-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DataManagerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
