import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, Subject } from 'rxjs';
import { StateManagementService } from 'src/app/core/services/state-management.service';

@Component({
  selector: 'app-data-manager',
  templateUrl: './data-manager.component.html',
  styleUrls: ['./data-manager.component.scss'],
})
export class DataManagerComponent implements OnInit {
  currentRoute: string = 'Upcoming';
  tabs: any[] = [
    {
      name: 'Upcoming',
      route: '/dashboard/r/data-manager/upcoming',
    },
    {
      name: 'Current',
      route: '/dashboard/r/data-manager/current',
    },
    {
      name: 'History',
      route: '/dashboard/r/data-manager/history',
    },
  ];

  constructor(private router: Router, private _stateManagementService: StateManagementService) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event: any) => {
        if (event.url == '/dashboard/r/data-manager/upcoming') {
          this.currentRoute = 'Upcoming';
        } else if (event.url == '/dashboard/r/data-manager/history') {
          this.currentRoute = 'History';
        } else if (event.url == '/dashboard/r/data-manager/current') {
          this.currentRoute = 'Current';
        }
      });
  }
  ngOnInit(): void {
    this.getRoles();
  }

  getRoles() {
    // this._stateManagementService.getMatchEventList()
    //   .subscribe((response: any) => {
    //     debugger
    //     console.log(response.message);
    //   });

  }
}
