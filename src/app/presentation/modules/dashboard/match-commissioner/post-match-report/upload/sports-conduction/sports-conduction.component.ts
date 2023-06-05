import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sports-conduction',
  templateUrl: './sports-conduction.component.html',
  styleUrls: ['./sports-conduction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SportsConductionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
