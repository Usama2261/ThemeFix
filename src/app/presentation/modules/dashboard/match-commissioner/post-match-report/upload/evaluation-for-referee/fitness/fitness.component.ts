import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fitness',
  templateUrl: './fitness.component.html',
  styleUrls: ['./fitness.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FitnessComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
