import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { filter } from 'rxjs';
import { Roles } from 'src/app/core/models/user.model';
import { AuthenticationService } from 'src/app/core/services/authentication.service';

@Component({
  selector: 'app-main-side-menu',
  templateUrl: './main-side-menu.component.html',
  styleUrls: ['./main-side-menu.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MainSideMenuComponent implements OnInit {


  homeIcon = faHome
  notificationIcon = faBell

  showDataManagerMenu: boolean = false
  showLeagueDirectorMenu: boolean = false
  isHomeMenu: boolean = false
  isRoleMenu: boolean = false

  constructor(
    private authService: AuthenticationService,
    private route: ActivatedRoute
  ) {
    this.showDataManagerMenu = this.authService.getUser().role == Roles.DATA_MANAGER
    this.showLeagueDirectorMenu = this.authService.getUser().role == Roles.LEAGUE_DIRECTOR
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.rm) {
        this.isRoleMenu = true
      } else {
        this.isRoleMenu = false
      }
    })
  }

}
