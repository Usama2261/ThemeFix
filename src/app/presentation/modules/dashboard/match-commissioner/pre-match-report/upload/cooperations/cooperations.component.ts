import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cooperations',
  templateUrl: './cooperations.component.html',
  styleUrls: ['./cooperations.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CooperationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
