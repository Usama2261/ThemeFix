import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  // settingsIcon = faGear

  constructor() { }

  ngOnInit(): void {
  }

}
