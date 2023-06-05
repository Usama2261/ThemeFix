import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farp-match-control',
  templateUrl: './farp-match-control.component.html',
  styleUrls: ['./farp-match-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarpMatchControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
