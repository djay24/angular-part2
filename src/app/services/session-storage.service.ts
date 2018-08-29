import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {
  private app = 'mean.';
  
  constructor() { }
  set(key, data) {
    return localStorage.setItem(`${this.app}${key}`, JSON.stringify(data));
  };
  get(key) {
    return JSON.parse(localStorage.getItem(`${this.app}${key}`)); //this is getting string from the set function and turning it back into an object
  };

  remove(key) {
    return localStorage.removeItem(`${this.app}${key}`);
  }
}
