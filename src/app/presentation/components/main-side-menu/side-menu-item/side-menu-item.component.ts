import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-item',
  templateUrl: './side-menu-item.component.html',
  styleUrls: ['./side-menu-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideMenuItemComponent implements OnInit {

  @Input() d: any
  @Input() viewBox: any
  @Input() url: any
  queryParams: any
  @Input() isRoleMenu: any

  constructor() {
  }

  ngOnInit(): void {
    if (this.isRoleMenu) {
      this.queryParams = { rm: 1 }
    }
  }

}
