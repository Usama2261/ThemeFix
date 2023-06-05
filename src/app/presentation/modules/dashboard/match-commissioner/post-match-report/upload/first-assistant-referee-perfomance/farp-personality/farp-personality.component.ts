import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-farp-personality',
  templateUrl: './farp-personality.component.html',
  styleUrls: ['./farp-personality.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FarpPersonalityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
