import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sarp-position-and-movement',
  templateUrl: './sarp-position-and-movement.component.html',
  styleUrls: ['./sarp-position-and-movement.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SarpPositionAndMovementComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
