import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-additional-remarks',
  templateUrl: './additional-remarks.component.html',
  styleUrls: ['./additional-remarks.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdditionalRemarksComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
