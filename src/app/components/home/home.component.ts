import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private localStorage: LocalStorageService) { }



  ngOnInit() { 
    this.localStorage.set('currentUser', {name: 'DJ', age: '21'});
    console.log(this.localStorage.get('currentUser'))
  }
}
