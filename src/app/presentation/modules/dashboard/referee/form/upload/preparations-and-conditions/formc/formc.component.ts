import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formc',
  templateUrl: './formc.component.html',
  styleUrls: ['./formc.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormcComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
