import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { Team } from '../../models/team.model';

@Injectable({
  providedIn: 'root'
})
export class TeamsService extends BackendApiService{

  list<ApiResponse>() {
    return this.get<ApiResponse>('admin/teams');
  }

  store<ApiResponse>(team: Team) {
    return this.post<ApiResponse>('admin/teams', team);
  }

  show<ApiResponse>(team: Team) {
    return this.get<ApiResponse>('admin/teams/' + team.id);
  }

  update<ApiResponse>(team: Team) {
    return this.post<ApiResponse>('admin/teams/' + team.id, team);
  }

  remove<ApiResponse>(team: Team) {
    return this.delete<ApiResponse>('admin/teams/' + team.id);
  }

}
