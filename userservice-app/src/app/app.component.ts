import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'userservice-app';

  users:{name: string, status: string}[];

  constructor(private usersService: UsersService){
  }

  ngOnInit(){
    this.users = this.usersService.users;
  }

}
