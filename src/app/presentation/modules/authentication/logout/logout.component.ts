import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LogoutComponent implements OnInit {

  constructor( 
    private authService: AuthenticationService
  ) {

  }

  ngOnInit(): void {
    this.authService.logout();
  }

}
