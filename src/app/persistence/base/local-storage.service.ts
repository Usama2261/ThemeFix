import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }
  save(key: string, value: [] | object): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  retrieve(key: string): object | null {
    let storedStringValue = localStorage.getItem(key);
    return storedStringValue ? JSON.parse(storedStringValue) : null;
  }
}
