import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-inner-button',
  templateUrl: './inner-button.component.html',
  styleUrls: ['./inner-button.component.scss']
})
export class InnerButtonComponent implements OnInit {

  @Input() type: "add"|"filter"|"menu" = "add";

  constructor() { }

  ngOnInit(): void {
  }

}
