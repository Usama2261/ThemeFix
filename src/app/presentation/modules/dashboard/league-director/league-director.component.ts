import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-league-director',
  templateUrl: './league-director.component.html',
  styleUrls: ['./league-director.component.scss']
})
export class LeagueDirectorComponent implements OnInit {

  currentRoute: string = 'Upcoming'
  tabs: any[] = [
    {
      name: "Upcoming",
      route: "/dashboard/r/league-director/upcoming"
    },
    {
      name: "Current",
      route: "/dashboard/r/league-director/current"
    },
    {
      name: "History",
      route: "/dashboard/r/league-director/history"
    },
  ]

  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url ==  "/dashboard/r/league-director/upcoming") {
          this.currentRoute = "Upcoming"
        }else if(event.url == "/dashboard/r/league-director/history"){
          this.currentRoute = "History"
        }else if(event.url == "/dashboard/r/league-director/current"){
          this.currentRoute = "Current"
        }
      });

  }

  ngOnInit(): void {
  }
}
