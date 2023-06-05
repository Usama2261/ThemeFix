import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-treatment',
  templateUrl: './treatment.component.html',
  styleUrls: ['./treatment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TreatmentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
