import { UsersService } from './../shared/services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsers: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.activeUsers = this.usersService.activeUsers;
  }

  setInactive(index: number){
    this.usersService.setInactive(index);
  }
}