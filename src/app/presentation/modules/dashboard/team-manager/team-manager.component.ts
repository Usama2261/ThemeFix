import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-team-manager',
  templateUrl: './team-manager.component.html',
  styleUrls: ['./team-manager.component.scss']
})
export class TeamManagerComponent implements OnInit {

  currentRoute: string = 'Upcoming'
  tabs: any[] = [
    {
      name: "Upcoming",
      route: "/dashboard/r/team-manager/upcoming"
    },
    {
      name: "History",
      route: "/dashboard/r/team-manager/history"
    }
  ]
  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url ==  "/dashboard/r/team-manager/upcoming") {
          this.currentRoute = "Upcoming"
        }else if(event.url == "/dashboard/r/team-manager/history"){
          this.currentRoute = "History"
        }
      });

  }

  ngOnInit(): void {
  }

}
