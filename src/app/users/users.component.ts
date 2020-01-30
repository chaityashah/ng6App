import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';


declare var require;

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: Object;
  
  constructor(private data: DataService) { }

  ngOnInit() {
    this.users = require('../../assets/users.json');
    // this.data.getUsers().subscribe(
    //   data => this.users = data
    // )
  }

}
