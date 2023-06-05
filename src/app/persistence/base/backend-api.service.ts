import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  protected apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  post<T>(url: string, data: any) {
    return this.http.post<T>(this.apiUrl + url, data)
  }

  get<T>(url: string) {
    return this.http.get<T>(this.apiUrl + url)
  }

  delete<T>(url: string) {
    return this.http.delete<T>(this.apiUrl + url)
  }
}
