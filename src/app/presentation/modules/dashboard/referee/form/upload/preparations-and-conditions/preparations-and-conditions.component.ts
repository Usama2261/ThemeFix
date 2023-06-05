import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-preparations-and-conditions',
  templateUrl: './preparations-and-conditions.component.html',
  styleUrls: ['./preparations-and-conditions.component.scss']
})
export class PreparationsAndConditionsComponent implements OnInit {

  currentForm = "A"

  constructor() { }

  ngOnInit(): void {
  }
}
