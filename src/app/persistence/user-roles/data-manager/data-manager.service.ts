import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { AssignMatchOfficial } from '../../models/assign-match-official.model';

@Injectable({
  providedIn: 'root'
})
export class DataManagerService extends BackendApiService {

  listMatchEvents<ApiResponse>() {
    return this.get<ApiResponse>('data-manager/list-match-events');
  }

  storeMatchEvent<ApiResponse>(matchEvent: any) {
    return this.post<ApiResponse>('data-manager/create-match-event', matchEvent);
  }

  updateMatchEvent<ApiResponse>(matchEvent: any) {
    return this.post<ApiResponse>('data-manager/update-match-event', matchEvent);
  }

  createTournament<ApiResponse>(tournament: any) {
    return this.post<ApiResponse>('data-manager/create-tournament', tournament);
  }

  assignMatchOfficial<ApiResponse>(assignMatchOfficial: AssignMatchOfficial) {
    return this.post<ApiResponse>('data-manager/assign-match-event', assignMatchOfficial);
  }

  showMatchEvent<ApiResponse>(matchId: string) {
    return this.get<ApiResponse>('data-manager/match-event/' + matchId);
  }
}

