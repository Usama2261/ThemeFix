import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { Stadium } from '../../models/stadium.model';

@Injectable({
  providedIn: 'root'
})
export class StadiaService extends BackendApiService{

  list<ApiResponse>() {
    return this.get<ApiResponse>('admin/stadia');
  }

  store<ApiResponse>(stadium: Stadium) {
    return this.post<ApiResponse>('admin/stadia', stadium);
  }

  show<ApiResponse>(stadium: Stadium) {
    return this.get<ApiResponse>('admin/stadia/' + stadium.id);
  }

  update<ApiResponse>(stadium: Stadium) {
    return this.post<ApiResponse>('admin/stadia/' + stadium.id, stadium);
  }

  remove<ApiResponse>(stadium: Stadium) {
    return this.delete<ApiResponse>('admin/stadia/' + stadium.id);
  }
}
