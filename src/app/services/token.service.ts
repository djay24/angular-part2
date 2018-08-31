import { Injectable } from '@angular/core';
import { LocalStorageService } from './local-storage.service';
import { SessionStorageService } from './session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  tokenLength = 12;

  tokenArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '0', '1', '2', '3'];

 
  constructor(private localStorage: LocalStorageService, private sessionStorage: SessionStorageService) { }

  generateToken () {
    let rndString = '';
    for(let i = 0; i < this.tokenLength; i++) {
      let rndNumber = Math.ceil(Math.random() * this.tokenArray.length) - 1;
      rndString = rndString + this.tokenArray[rndNumber];
    }
    this.sessionStorage.set('token', rndString);
  }

}
