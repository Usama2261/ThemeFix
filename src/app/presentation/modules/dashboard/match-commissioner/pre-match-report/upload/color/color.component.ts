import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ColorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
