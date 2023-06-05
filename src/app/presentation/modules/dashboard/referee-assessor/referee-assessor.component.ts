import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-referee-assessor',
  templateUrl: './referee-assessor.component.html',
  styleUrls: ['./referee-assessor.component.scss']
})
export class RefereeAssessorComponent implements OnInit {

  currentRoute: string = 'Upcoming'
  tabs: any[] = [
    {
      name: "Upcoming",
      route: "/dashboard/r/referee-assessor/upcoming"
    },
    {
      name: "History",
      route: "/dashboard/r/referee-assessor/history"
    }
  ]
  constructor(
    private router: Router
  ) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe((event: any) => {
        if (event.url ==  "/dashboard/r/referee-assessor/upcoming") {
          this.currentRoute = "Upcoming"
        }else if(event.url == "/dashboard/r/referee-assessor/history"){
          this.currentRoute = "History"
        }
      });

  }

  ngOnInit(): void {
  }
}
