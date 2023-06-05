import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { Player } from '../../models/player.model';

@Injectable({
  providedIn: 'root'
})
export class PlayersService extends BackendApiService {

  list<ApiResponse>() {
    return this.get<ApiResponse>('teammanager/players');
  }

  store<ApiResponse>(player: Player) {
    return this.post<ApiResponse>('teammanager/players', player);
  }

  show<ApiResponse>(player: Player) {
    return this.get<ApiResponse>('teammanager/players/' + player.id);
  }

  update<ApiResponse>(player: Player) {
    return this.post<ApiResponse>('teammanager/players/' + player.id, player);
  }

  remove<ApiResponse>(player: Player) {
    return this.delete<ApiResponse>('teammanager/players/' + player.id);
  }
}
