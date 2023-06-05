import { Injectable } from '@angular/core';
import { fromEvent, map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeviceSizeService {

  constructor() { }

  getDeviceSize(): Observable<any>{
    return fromEvent(window, 'resize');
  }

  getWindowDimensions() {
    return {
      width: window.innerWidth,
      height: window.innerHeight
    }
  }

  isMobile(): boolean{
    return this.getWindowDimensions().width < 768;
  }

  get isMobile$(): Observable<boolean>{
    return this.getDeviceSize().pipe(
      map(() => this.isMobile())
    );
  }
}
