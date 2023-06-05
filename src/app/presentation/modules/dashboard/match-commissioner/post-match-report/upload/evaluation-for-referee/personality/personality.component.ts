import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personality',
  templateUrl: './personality.component.html',
  styleUrls: ['./personality.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PersonalityComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
