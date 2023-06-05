import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class LeagueDirectorService extends BackendApiService {
  listMacthEvents<ApiResponse>() {
    return this.get<ApiResponse>('league-director/list-match-events');
  }

  showMatchEvent<ApiResponse>(matchEventId: number) {
    return this.get<ApiResponse>(`league-director/get-match-event/${matchEventId}`);
  }

  listScoreboards<ApiResponse>() {
    return this.get<ApiResponse>('league-director/scoreboard');
  }

}
