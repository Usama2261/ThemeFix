import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-title',
  templateUrl: './inner-title.component.html',
  styleUrls: ['./inner-title.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerTitleComponent implements OnInit {

  @Input() title: string = "";
  
  constructor() { }

  ngOnInit(): void {
  }

}
