import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forma',
  templateUrl: './forma.component.html',
  styleUrls: ['./forma.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FormaComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
