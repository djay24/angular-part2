import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  items: object[] = [
    {name: 'item 1', status: false, done: false},
    {name: 'item 2', status: false, done: false},
    {name: 'item 3', status: true, done: false},
    {name: 'item 4', status: false, done: false}
  ];
  newItem: string;

  constructor() { }
  toggleStatus(item) {
    item.status = !item.status
  }

  removeItem(item) {
    item.done = !item.done
  }

  addItem() {
    const item: object = {
      name: this.newItem,
      status: false,
      done: false
    };
    this.items.push(item);
    this.newItem = '';
    return;
  }

  deleteItem(item) {
    // const index = this.items.indexOf(item);
    this.items.splice(item, 1);
  }

  ngOnInit() {
  }

}
