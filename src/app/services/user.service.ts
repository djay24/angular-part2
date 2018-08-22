import { Injectable } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3/instructions';

import { User } from '../classes/user'


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() {}
   register(user: User) {
    console.log(user)
   };

   login(user: any) {
     console.log(user);
   };
}
