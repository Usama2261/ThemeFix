import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  // selector: 'app-referee-upcoming',
  templateUrl: './referee-upcoming.component.html',
  styleUrls: ['./referee-upcoming.component.scss']
})
export class RefereeUpcomingComponent implements OnInit {


  toggleEditModal: Subject<boolean> = new Subject();
  editData: any

  table: InnerTable = {
    headers: [
      { name: 'Number', key: 'number' },
      { name: 'Date', key: 'date' },
      { name: 'Home Team', key: 'hometeam' },
      { name: 'Away Team', key: 'awayteam' },
      { name: 'Venue', key: 'venue' },
      { name: 'City', key: 'city' },
    ],
    data: [
      { number: '1', date: '2021-01-01', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 1', city: 'City Name', view: true },
      { number: '2', date: '2021-01-02', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 2', city: 'City Name', upload: true },
      { number: '3', date: '2021-01-03', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 3', city: 'City Name', upload: true },
      { number: '4', date: '2021-01-04', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 4', city: 'City Name', view: true },
      { number: '5', date: '2021-01-05', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 5', city: 'City Name', view: true },
      { number: '6', date: '2021-01-06', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 6', city: 'City Name', upload: true },
      { number: '7', date: '2021-01-07', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 7', city: 'City Name', upload: true },
      { number: '8', date: '2021-01-08', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 8', city: 'City Name', view: true  },
      { number: '9', date: '2021-01-09', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 9', city: 'City Name', view: true  },
      { number: '10', date: '2021-01-10', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 10', city: 'City Name', view: true  },
      { number: '11', date: '2021-01-11', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 11', city: 'City Name', upload: true },
      { number: '12', date: '2021-01-12', hometeam: 'Home Team',awayteam: 'Away Team', venue: 'Venue 12', city: 'City Name', upload: true }
    ],
    options: {
      inlineActions: true,
    }
  }
  constructor(
    private router:Router
  ) { }

  ngOnInit(): void {
  }
  handleView(e: any) {
    this.router.navigate(["/dashboard/r/referee/referee-forms/details"], { queryParams: { id: e.number } });
  }

  handleUpload(e: any) {
    this.router.navigate(["/dashboard/r/referee/referee-forms/form"], { queryParams: { id: e.number } });
  }
}

