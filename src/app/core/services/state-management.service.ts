import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AppUtils } from '../helper/AppUtils';

@Injectable({
  providedIn: 'root',
})
export class StateManagementService {
  url: string = 'https://be-tblp.dimbaa.com/api/';

  constructor(private http: HttpClient, private appUtils: AppUtils) {}

  getMatchEventList(): Observable<any> {
    return this.http.get(
      this.url + 'data-manager/list-match-events',
      this.appUtils.GetAppApiHeaders()
    );
  }

  createMatchEvent(model: any){

    return this.http.post(
      this.url + 'data-manager/create-match-event',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  updateMatchEvent(model: any){

    return this.http.patch(
      this.url + 'data-manager/create-match-event',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  createTournament(model: any){

    return this.http.post(
      this.url + 'data-manager/create-tournament',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  assignOfficialMatchEvent(){
    let model: any = {};
    model['match_id'] = 1,
    model['matches'] = [2, 3, 4, 5],
    model['head_referee_id'] = "1",
    model['referee_id'] = "1",
    model['match_officer_id'] = "1",
    model['commissonar_id'] = "1",
    model['other_id'] = "1",
    model['other2_id'] = "2",
    model['tournament_id'] = 1

    return this.http.post(
      this.url + 'data-manager/assign-match-event',
      model,
      this.appUtils.GetAppApiHeaders()
    );
  }

  getNotification(){
    return this.http.get(
      this.url + 'notifications',
      this.appUtils.GetAppApiHeaders()
    );
  }

  getScoreboardList(){
    return this.http.get(
      this.url + 'data-manager/scoreboard',
      this.appUtils.GetAppApiHeaders()
    );
  }

  getMatchEvent(id: number){
    return this.http.get(
      this.url + 'data-manager/get-match-event/'+ id,
      this.appUtils.GetAppApiHeaders()
    );
  }
}
