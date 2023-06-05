import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-match-commissioner',
  templateUrl: './match-commissioner.component.html',
  styleUrls: ['./match-commissioner.component.scss']
})
export class MatchCommissionerComponent implements OnInit {


  currentRoute: string = 'Upcoming'
  tabs: any[] = [
    {
      name: "Upcoming",
      route: "/dashboard/r/match-commissioner/upcoming"
    },
    {
      name: "History",
      route: "/dashboard/r/match-commissioner/history"
    },
  ]

  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url ==  "/dashboard/r/match-commissioner/upcoming") {
          this.currentRoute = "Upcoming"
        }else if(event.url == "/dashboard/r/match-commissioner/history"){
          this.currentRoute = "History"
        }
      });

  }

  ngOnInit(): void {
  }

}
