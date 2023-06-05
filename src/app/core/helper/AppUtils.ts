import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AppUtils {
  constructor() {}

  public GetAppApiHeaders() {
    const requestOptions = { headers: environment.headers };
    return requestOptions;
  }
}
