import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FinalComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
