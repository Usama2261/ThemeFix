import { Component, OnInit } from '@angular/core';
import { InnerTable } from 'src/app/core/interfaces/inner-table';

@Component({
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.scss']
})
export class LeagueDirectorScoreBoardComponent implements OnInit {


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
  constructor() { }

  ngOnInit(): void {
  }

}
