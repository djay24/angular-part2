import { Injectable } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3/instructions';

import { User } from '../classes/user'
import { ApiService } from './api.service'
import { Router } from '@angular/router'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private api: ApiService, private router: Router) {}
   register(user: User) {
    return this.api.post('/postUser', user).subscribe((res: any) => {
      console.log(res);
      this.router.navigateByUrl('/')
    });
   };

   login(user: any) {
    return this.api.post('/userLogin', user).subscribe((res: any) => {
      this.router.navigateByUrl('/')
    });
   };
   getAllUsers() {
    return this.api.get('/getAllUsers');
   };
}
