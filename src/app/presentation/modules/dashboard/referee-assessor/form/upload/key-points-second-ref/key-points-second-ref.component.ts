import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-points-second-ref',
  templateUrl: './key-points-second-ref.component.html',
  styleUrls: ['./key-points-second-ref.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyPointsSecondRefComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
