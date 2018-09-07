import { Injectable } from '@angular/core';
import { registerContentQuery } from '@angular/core/src/render3/instructions';

import { User } from '../classes/user'
import { ApiService } from './api.service'
import { Router, ActivatedRoute } from '@angular/router'
import { LocalStorageService } from './local-storage.service'
import { IUser } from '../interfaces/i-user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  profileUrl: string;
  currentProfile: IUser;
   constructor(private api: ApiService, private router: Router, private localStorage: LocalStorageService, private route: ActivatedRoute) { }
   register(user: User) {
    return this.api.post('/postUser', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user)
      console.log(res);
    }, err => console.log('There was an error'), () => this.router.navigateByUrl('/'));
   };
   login(user: any) {
    return this.api.post('/userLogin', user).subscribe((res: any) => {
      this.localStorage.set('currentUser', res.user);
    }, err => console.log(err), () => this.router.navigateByUrl('/'));
   };
   logout() {
     this.localStorage.remove('currentUser');
     this.router.navigateByUrl('/login');
   };
   getAllUsers() {
    return this.api.get('/getAllUsers');
   };
   getUser(_id) {
    return this.api.get(`/user/${_id}`);
   };
   getProfileUrl() {
    console.log(this.route.snapshot.url);
  }
}
