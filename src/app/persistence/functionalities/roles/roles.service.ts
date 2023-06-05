import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { Role } from '../../models/role.model';

@Injectable({
  providedIn: 'root'
})
export class RolesService extends BackendApiService {

  list<ApiResponse>() {
    return this.get<ApiResponse>('admin/roles');
  }

  store<ApiResponse>(role: Role) {
    return this.post<ApiResponse>('admin/roles', role);
  }

  show<ApiResponse>(role: Role) {
    return this.get<ApiResponse>('admin/roles/' + role.id);
  }

  update<ApiResponse>(role: Role) {
    return this.post<ApiResponse>('admin/roles/' + role.id, role);
  }

  remove<ApiResponse>(role: Role) {
    return this.delete<ApiResponse>('admin/roles/' + role.id);
  }
}
