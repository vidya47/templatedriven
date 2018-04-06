import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-templateform',
  templateUrl: './templateform.component.html',
  styleUrls: ['./templateform.component.css']
})
export class TemplateformComponent implements OnInit {
  userList: User[] = [];

  addUser(form){
    var user: User;
    user = form.value;
    this.userList.push(user);
  }
  constructor() { }

  ngOnInit() {
  }

}
