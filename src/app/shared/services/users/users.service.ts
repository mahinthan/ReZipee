import { CounterService } from './../counter/counter.service';
import { Injectable } from '@angular/core';

@Injectable()
export class UsersService {

  activeUsers: string[] = ['Steve', 'Bill'];
  inactiveUsers: string[] = ['Tim', 'Gary'];
  
  constructor(private counterService: CounterService) { }

  setInactive(index: number){
    this.inactiveUsers.push(this.activeUsers.splice(index, 1)[0]);
    this.counterService.inactiveCounter++;
    console.log('The Inactive Users Counter was Incremented to: ', this.counterService.inactiveCounter);
  }

  setActive(index: number){
    this.activeUsers.push(this.inactiveUsers.splice(index, 1)[0]);
    this.counterService.activeCounter++;
    console.log('The Active Users Counter was Incremented to: ', this.counterService.activeCounter);
  }
}