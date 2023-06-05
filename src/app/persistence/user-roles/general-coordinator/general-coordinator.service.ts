import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';

@Injectable({
  providedIn: 'root'
})
export class GeneralCoordinatorService extends BackendApiService{

  listMatchEvents<ApiResponse>() {
    return this.get<ApiResponse>('general-coordinator/list-match-events');
  }
}
