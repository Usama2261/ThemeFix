import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlertComponent implements OnInit {

  @Input() type: "success" | "error" | "warning" | "info" | "confirm" = "success";
  @Input() title: string = ""
  @Input() message: string = ""

  @Output() onConfirm: EventEmitter<any> = new EventEmitter<any>();

  textClass = ""

  constructor() { }

  ngOnInit(): void {
    if(this.title === "") {
      switch(this.type) {
        case "success":
          this.title = "Success"
          this.textClass = "text-success"
          break;
        case "error":
          this.title = "Error"
          this.textClass = "text-error"
          break;
        case "warning":
          this.title = "Warning"
          this.textClass = "text-warning"
          break;
        case "info":
          this.title = "Info"
          this.textClass = "text-info"
          break;
      }
    } else {
      this.textClass = "text-" + this.type
    }
  }

  onAction(action: any) {
    this.onConfirm.emit(action)
  }

}
