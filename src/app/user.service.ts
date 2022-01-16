import { Injectable } from '@angular/core';
import { CounterService } from './counter.service';

@Injectable({
  providedIn: 'root'
})

export class UserService {
  activeUsers = ['Ganesh', 'Amar'];
  inactiveUsers = ['Gopal', 'Rohit'];

  constructor(private counterService: CounterService) { }

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementInactiveToActive();
  }

  setToInActive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementActiveToInactive();
  }
}
