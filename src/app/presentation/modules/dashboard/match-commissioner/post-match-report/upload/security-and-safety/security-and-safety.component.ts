import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-security-and-safety',
  templateUrl: './security-and-safety.component.html',
  styleUrls: ['./security-and-safety.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecurityAndSafetyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
