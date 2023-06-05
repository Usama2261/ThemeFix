import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../base/api-response';
import { Permission } from '../../models/permission.model';

@Injectable({
  providedIn: 'root'
})
export class PermissionsService extends BackendApiService {
  list(): Observable<ApiResponse> {
    return this.get<ApiResponse>('admin/permissions');
  }

  store(permission: Permission): Observable<ApiResponse> {
    return this.post<ApiResponse>('admin/permissions', permission);
  }

  update(permission: Permission): Observable<ApiResponse> {
    return this.post<ApiResponse>('admin/permissions/' + permission.id, permission);
  }

  remove(permission: Permission) {
    return this.delete<ApiResponse>('admin/permissions/' + permission.id);
  }
}
