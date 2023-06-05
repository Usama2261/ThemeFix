import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farp-position-and-movement',
  templateUrl: './farp-position-and-movement.component.html',
  styleUrls: ['./farp-position-and-movement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarpPositionAndMovementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
