import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-general-coordinator',
  templateUrl: './general-coordinator.component.html',
  styleUrls: ['./general-coordinator.component.scss']
})
export class GeneralCoordinatorComponent implements OnInit {

  currentRoute: string = 'Upcoming'
  tabs: any[] = [
    {
      name: "Upcoming",
      route: "/dashboard/r/general-coordinator/upcoming"
    },
    {
      name: "History",
      route: "/dashboard/r/general-coordinator/history"
    },
  ]

  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url ==  "/dashboard/r/general-coordinator/upcoming") {
          this.currentRoute = "Upcoming"
        }else if(event.url == "/dashboard/r/general-coordinator/history"){
          this.currentRoute = "History"
        }
      });

  }

  ngOnInit(): void {
  }

}
