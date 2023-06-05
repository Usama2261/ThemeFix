import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sarp-match-control',
  templateUrl: './sarp-match-control.component.html',
  styleUrls: ['./sarp-match-control.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SarpMatchControlComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
