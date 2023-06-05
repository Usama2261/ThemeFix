import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-physical-fitness-and-positioning',
  templateUrl: './physical-fitness-and-positioning.component.html',
  styleUrls: ['./physical-fitness-and-positioning.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PhysicalFitnessAndPositioningComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
