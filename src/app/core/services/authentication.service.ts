import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { Roles, User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {

  isAuthenticated: boolean = false//!environment.production
  currentUser: User = new User();

  constructor(public router: Router) {
    //this.currentUser.role = Roles.SUPER_ADMIN
  }

  login(data: any) {
    this.isAuthenticated = true;
    if (data.email == "superadmin@dimbaa.com") {
      this.currentUser.role = Roles.SUPER_ADMIN
      this.router.navigate(['dashboard']);
    } else if (data.email == "teamadmin@dimbaa.com") {
      this.currentUser.role = Roles.TEAM_ADMIN
      this.router.navigate(['dashboard']);
    } else if (data.email == "teammanager@dimbaa.com") {
      this.currentUser.role = Roles.TEAM_MANAGER
      this.router.navigate(['dashboard']);
    } else if (data.email == "datamanager@dimbaa.com") {
      this.currentUser.role = Roles.DATA_MANAGER
      this.router.navigate(['dashboard']);
    } else if (data.email == "leaguedirector@dimbaa.com") {
      this.currentUser.role = Roles.LEAGUE_DIRECTOR
      this.router.navigate(['dashboard']);
    } else if (data.email == "generalcoordinator@dimbaa.com") {
      this.currentUser.role = Roles.GENERAL_COORDINATOR
      this.router.navigate(['dashboard']);
    } else if (data.email == "matchcommissioner@dimbaa.com") {
      this.currentUser.role = Roles.MATCH_COMMISSIONER
      this.router.navigate(['dashboard']);
    } else if (data.email == "referee@dimbaa.com") {
      this.currentUser.role = Roles.REFEREE
      this.router.navigate(['dashboard']);
    } else if (data.email == "refereeassessor@dimbaa.com") {
      this.currentUser.role = Roles.REFEREE_ASSESSOR
      this.router.navigate(['dashboard']);
    } else {
      alert("user not found");
      this.router.navigate(['login']);
    }
  }

  logout() {
    this.isAuthenticated = false;
    this.currentUser = new User()
    this.router.navigate(['authentication/login']);
  }

  getUser() {
    return this.currentUser;
  }
}
