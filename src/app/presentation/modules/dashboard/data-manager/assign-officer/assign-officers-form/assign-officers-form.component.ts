import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-assign-officers-form',
  templateUrl: './assign-officers-form.component.html',
  styleUrls: ['./assign-officers-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AssignOfficersFormComponent implements OnInit {

  @Input() data: any = null

  constructor() { }

  ngOnInit(): void {
  }

}
