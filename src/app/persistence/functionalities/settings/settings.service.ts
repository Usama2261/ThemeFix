import { Injectable } from '@angular/core';
import { BackendApiService } from '../../base/backend-api.service';
import { Team } from '../../models/team.model';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  theme = new BehaviorSubject<string>('default');
   

  
  //  propertyValue: string;

  getTheme() {
    return this.theme.asObservable();;
  }

  setTheme(value: string) {
    this.theme .next(value);
  }

}
