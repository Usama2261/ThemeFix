import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-substitutions',
  templateUrl: './substitutions.component.html',
  styleUrls: ['./substitutions.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SubstitutionsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
