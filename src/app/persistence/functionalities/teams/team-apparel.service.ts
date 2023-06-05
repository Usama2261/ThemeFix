import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { TeamApparel } from '../../models/team-apparel.model';

@Injectable({
  providedIn: 'root'
})
export class TeamApparelService extends BackendApiService {

  list<ApiResponse>() {
    return this.get<ApiResponse>('teammanager/apparel');
  }

  store<ApiResponse>(team_apparel: TeamApparel) {
    return this.post<ApiResponse>('teammanager/apparel', team_apparel);
  }

  show<ApiResponse>(team_apparel: TeamApparel) {
    return this.get<ApiResponse>('teammanager/apparel/' + team_apparel.id);
  }

  update<ApiResponse>(team_apparel: TeamApparel) {
    return this.post<ApiResponse>('teammanager/apparel/' + team_apparel.id, team_apparel);
  }

  remove<ApiResponse>(team_apparel: TeamApparel) {
    return this.delete<ApiResponse>('teammanager/apparel/' + team_apparel.id);
  }
}
