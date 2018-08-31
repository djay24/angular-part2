import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms'
import { ErrorStateMatcher } from '@angular/material'

import { UserService } from '../../services/user.service'

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean { 
  const isSubmitted = form && form.submitted;
  return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
}
  }

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  authUser = {
    emailFormControl: new FormControl('' , [
      Validators.required,
      Validators.email
    ]),
    password: ''
  };
  matcher = new MyErrorStateMatcher();

  constructor(private userService: UserService) { }

  login() {
    this.userService.login(this.authUser);
  }
  ngOnInit() {
  }

}
