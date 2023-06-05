import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-key-points',
  templateUrl: './key-points.component.html',
  styleUrls: ['./key-points.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class KeyPointsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
