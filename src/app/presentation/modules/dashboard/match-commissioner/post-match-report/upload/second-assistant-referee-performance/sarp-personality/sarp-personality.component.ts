import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sarp-personality',
  templateUrl: './sarp-personality.component.html',
  styleUrls: ['./sarp-personality.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SarpPersonalityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
