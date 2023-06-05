import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inner-mobile-header',
  templateUrl: './inner-mobile-header.component.html',
  styleUrls: ['./inner-mobile-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InnerMobileHeaderComponent implements OnInit {

  @Input() title!: string;
  @Input() subTitle!: string;
  @Input() backUrl!: string;

  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }

  navigate() {
    this.router.navigate([this.backUrl]);
  }

}
