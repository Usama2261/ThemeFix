import { Injectable } from '@angular/core';
import { User } from 'src/app/core/models/user.model';
import { BackendApiService } from '../../base/backend-api.service';
import { ApiResponse } from '../../base/api-response';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BackendApiService {

  register(user: User): Observable<ApiResponse> {
    return this.post<ApiResponse>('auth/register', user);
  }

  login(user: User): Observable<ApiResponse> {
    return this.post<ApiResponse>('auth/login', user);
  }

  logout(): Observable<ApiResponse> {
    return this.get<ApiResponse>('auth/logout');
  }
}
