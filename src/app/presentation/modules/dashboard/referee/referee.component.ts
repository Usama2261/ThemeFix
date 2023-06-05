import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-referee',
  templateUrl: './referee.component.html',
  styleUrls: ['./referee.component.scss']
})
export class RefereeComponent implements OnInit {

  currentRoute: string = 'Upcoming'
  tabs: any[] = [
    {
      name: "Upcoming",
      route: "/dashboard/r/referee/upcoming"
    },
    {
      name: "History",
      route: "/dashboard/r/referee/history"
    }
  ]
  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url ==  "/dashboard/r/referee/upcoming") {
          this.currentRoute = "Upcoming"
        }else if(event.url == "/dashboard/r/referee/history"){
          this.currentRoute = "History"
        }
      });

  }

  ngOnInit(): void {
  }

}
