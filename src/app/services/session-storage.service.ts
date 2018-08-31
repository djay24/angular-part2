import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private app = 'mean.';
  
  constructor() { }
  set(key, data) {
    return sessionStorage.setItem(`${this.app}${key}`, JSON.stringify(data));
  };
  get(key) {
    return JSON.parse(sessionStorage.getItem(`${this.app}${key}`)); //this is getting string from the set function and turning it back into an object
  };

  remove(key) {
    return sessionStorage.removeItem(`${this.app}${key}`);
  }
}
