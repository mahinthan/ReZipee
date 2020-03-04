import { UsersService } from './../shared/services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent implements OnInit {

  inactiveUsers: string[];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.inactiveUsers = this.usersService.inactiveUsers;
  }

  setActive(index: number){
    this.usersService.setActive(index);
  }

}
