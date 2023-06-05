import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class ScoreBoardComponent implements OnInit {

/*
  table: InnerTable = {
    headers: [
      { name: '', key: 'teams' },
      { name: 'Matches', key: 'matches' },
      { name: 'Score', key: 'score' },
      { name: 'Point', key: 'point' },
    ],
    data: [
      { teams: 'Team 1', matches: '2', score: '2-0', point: '4' },
      { teams: 'Team 2', matches: '2', score: '1-1', point: '3' },
      { teams: 'Team 3', matches: '2', score: '1-1', point: '3' },
      { teams: 'Team 4', matches: '2', score: '0-2', point: '0' },
      { teams: 'Team 5', matches: '2', score: '0-2', point: '0' },
    ]
  }
  */

  toggleMatchModal: Subject<boolean> = new Subject();
  matchData: any

  table: InnerTable = {
    headers: [
     // { name: 'Number', key: 'number' },
     // { name: 'Date', key: 'date' },
     // { name: 'For team', key: 'forteam' },
     // { name: 'Venue', key: 'venue' },
     // { name: 'City', key: 'city' },
      { name: 'Position', key: 'position' },
      { name: 'Club', key: 'club' },
      { name: 'Played', key: 'played' },
      { name: 'Won', key: 'won' },
      { name: 'Drawn', key: 'drawn' },
      { name: 'Lost', key: 'lost' },
      { name: 'GF', key: 'gf' },
      { name: 'GA', key: 'ga' },
      { name: 'GD', key: 'gd' },
      { name: 'Points', key: 'points' },
    ],
    data: [
	    { position : 1 , prevPosition:1, club : 'Simba' , played : 5 , won : 3 , drawn : 1 , lost : 1 , gf : 2 , ga : 2 , gd : 2 , points : 5,
		forms :[ 
			{ status:'L' , teama : 'Simba' , 'goala' : 1 , 'goalb' : 3 , teamb : 'Azam' , date : 'Sunday 21 May 2023' },
			{ status:'D' , teama : 'Simba' , 'goala' : 2 , 'goalb' : 2 , teamb : 'Azam' , date : 'Sunday 22 May 2023' },
			{ status:'W' , teama : 'Simba' , 'goala' : 3 , 'goalb' : 1 , teamb : 'Azam' , date : 'Sunday 23 May 2023' }
		] ,
    acc : {  content : 'acc' , expanded : false  },
    performance :[
      { topPosition : '0px' , position:1, matchNo : 1,  status:'L' , teama : 'Simba' , 'goala' : 1 , 'goalb' : 3 , teamb : 'Azam' , date : 'Sunday 21 May 2023' },
      { topPosition : '16px' /* position * 8px */ , position:2, matchNo : 2, status:'D' , teama : 'Simba' , 'goala' : 2 , 'goalb' : 2 , teamb : 'Azam' , date : 'Sunday 22 May 2023' },
      { topPosition : '24px' , position:3, matchNo : 3, status:'W' , teama : 'Simba' , 'goala' : 3 , 'goalb' : 1 , teamb : 'Azam' , date : 'Sunday 23 May 2023' },
      { topPosition : '32px' , position:1, matchNo : 4,  status:'L' , teama : 'Simba' , 'goala' : 1 , 'goalb' : 3 , teamb : 'Azam' , date : 'Sunday 21 May 2023' },
      { topPosition : '40px' ,  position:1, matchNo : 5, status:'D' , teama : 'Simba' , 'goala' : 2 , 'goalb' : 2 , teamb : 'Azam' , date : 'Sunday 22 May 2023' },
      { topPosition : '8px' , position:1, matchNo : 6, status:'W' , teama : 'Simba' , 'goala' : 3 , 'goalb' : 1 , teamb : 'Azam' , date : 'Sunday 23 May 2023' },
      {  topPosition : '0px' , position:1, matchNo : 7,  status:'L' , teama : 'Simba' , 'goala' : 1 , 'goalb' : 3 , teamb : 'Azam' , date : 'Sunday 21 May 2023' },
      { topPosition : '0px' ,  position:1, matchNo : 8, status:'D' , teama : 'Simba' , 'goala' : 2 , 'goalb' : 2 , teamb : 'Azam' , date : 'Sunday 22 May 2023' },
      {  topPosition : '0px' ,  position:1, matchNo : 9, status:'W' , teama : 'Simba' , 'goala' : 3 , 'goalb' : 1 , teamb : 'Azam' , date : 'Sunday 23 May 2023' },
      { topPosition : '40px' ,  position:1, matchNo : 10, status:'D' , teama : 'Simba' , 'goala' : 2 , 'goalb' : 2 , teamb : 'Azam' , date : 'Sunday 22 May 2023' },
      { topPosition : '8px' , position:1, matchNo : 11, status:'W' , teama : 'Simba' , 'goala' : 3 , 'goalb' : 1 , teamb : 'Azam' , date : 'Sunday 23 May 2023' },
      {  topPosition : '0px' , position:1, matchNo : 12,  status:'L' , teama : 'Simba' , 'goala' : 1 , 'goalb' : 3 , teamb : 'Azam' , date : 'Sunday 21 May 2023' },
      { topPosition : '0px' ,  position:1, matchNo : 13, status:'D' , teama : 'Simba' , 'goala' : 2 , 'goalb' : 2 , teamb : 'Azam' , date : 'Sunday 22 May 2023' },
      {  topPosition : '0px' ,  position:1, matchNo : 14, status:'W' , teama : 'Simba' , 'goala' : 3 , 'goalb' : 1 , teamb : 'Azam' , date : 'Sunday 23 May 2023' }
    ],
    maxPosition : 1 , minPosition :30
	    },
      
	    { position : 1 ,prevPosition:2, club : 'Simba' , played : 5 , won : 3 , drawn : 1 , lost : 1 , gf : 2 , ga : 2 , gd : 2 , points : 5,
		forms :[ { status:'W' , teama : 'Simba' , 'goala' : 5 , 'goalb' : 3 , teamb : 'Azam' , date : 'Sunday 26 May 2023' }] 
    ,acc : {  content : 'acc' , expanded : false  }
	    }
    /*  { number: '1', date: '2021-01-01', forteam: 'Team 1', venue: 'Venue 1', city: 'City 1', edit: true },
      { number: '2', date: '2021-01-02', forteam: 'Team 2', venue: 'Venue 2', city: 'City 2', edit: true },
      { number: '3', date: '2021-01-03', forteam: 'Team 3', venue: 'Venue 3', city: 'City 3', edit: true },
      { number: '4', date: '2021-01-04', forteam: 'Team 4', venue: 'Venue 4', city: 'City 4', edit: true },
      { number: '5', date: '2021-01-05', forteam: 'Team 5', venue: 'Venue 5', city: 'City 5', edit: true },
      { number: '6', date: '2021-01-06', forteam: 'Team 6', venue: 'Venue 6', city: 'City 6', edit: true },
      { number: '7', date: '2021-01-07', forteam: 'Team 7', venue: 'Venue 7', city: 'City 7', edit: true },
      { number: '8', date: '2021-01-08', forteam: 'Team 8', venue: 'Venue 8', city: 'City 8', edit: true  },
      { number: '9', date: '2021-01-09', forteam: 'Team 9', venue: 'Venue 9', city: 'City 9', edit: true  },
      { number: '10', date: '2021-01-10', forteam: 'Team 10', venue: 'Venue 10', city: 'City 10', edit: true  },
      { number: '11', date: '2021-01-11', forteam: 'Team 11', venue: 'Venue 11', city: 'City 11', edit: true },
      { number: '12', date: '2021-01-12', forteam: 'Team 12', venue: 'Venue 12', city: 'City 12', edit: true } */
    ],
    options: {
      
      accordian:true,
      form:true,
    }
  }

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  handleEdit(e: any) {
	  this.matchData=e.form;
//    this.toggleEditModal.next(true)
  }


  handleView(e: any) {
	  console.log(e);
	  this.matchData=e.form;
    this.toggleMatchModal.next(true)
  }

  handleUpload(e: any) {
    this.router.navigate(["/dashboard/r/team-manager/line-up/form"], { queryParams: { id: e.number } });
  }
  handleFormMouseEnter( e:any ) {
	  console.log(e);
	  this.matchData = e;
	   this.toggleMatchModal.next(true);
  }
  handleFormMouseLeave( e:any ) {
	  console.log(e);
	  this.matchData = e;
	   this.toggleMatchModal.next(false);
  }
}
