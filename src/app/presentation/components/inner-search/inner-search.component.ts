import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-search',
  templateUrl: './inner-search.component.html',
  styleUrls: ['./inner-search.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerSearchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
