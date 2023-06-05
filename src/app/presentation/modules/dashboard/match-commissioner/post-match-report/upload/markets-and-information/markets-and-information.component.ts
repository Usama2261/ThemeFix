import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markets-and-information',
  templateUrl: './markets-and-information.component.html',
  styleUrls: ['./markets-and-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketsAndInformationComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
