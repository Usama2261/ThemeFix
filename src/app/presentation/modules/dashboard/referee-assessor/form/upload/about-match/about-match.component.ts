import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-match',
  templateUrl: './about-match.component.html',
  styleUrls: ['./about-match.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AboutMatchComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
