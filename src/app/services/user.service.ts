import { Injectable } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3/instructions';

import { User } from '../classes/user'
import { ApiService } from './api.service'
import { Router } from '@angular/router'
import { LocalStorageService } from './local-storage.service'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService, private router: Router, private localStorage: LocalStorageService) {}
   register(user: User) {
    return this.api.post('/postUser', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user)
      console.log(res);
    }, err => console.log('There was an error'), () => this.router.navigateByUrl('/'));
   };

   login(user: any) {
    return this.api.post('/userLogin', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user)
    }, err => console.log(err), () => this.router.navigateByUrl('/'));
   };
   logout() {
     return this.localStorage.remove('currentUser');
   }
   getAllUsers() {
    return this.api.get('/getAllUsers');
   };
}
