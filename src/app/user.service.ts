import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class UserService {
  position: number;

  observedUsers = new BehaviorSubject([
    {
      firstName: 'Dorian',
      lastName: 'Bramarov',
      email: 'dorian@email.com',
      password: '123456',
      passwordconf: '123456',
      street: '111 Hubbard Ave',
      unit: '1',
      city: 'Stamford',
      state: 'CT',
      createdAt: new Date()
    },
    {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@email.com',
    password: '123456',
    passwordconf: '123456',
    street: '2312 Mt. Vernon',
    unit: '0',
    city: 'Alexandria',
    state: 'VA',
    createdAt: new Date()
    }
  ]);

  updateUsers(users: Array<any>) {
    this.observedUsers.next(users);
}

  updateUserPosition(index) {
    this.position = index;
  }

  getUserPosition() {
    return this.position;
  }

  clearPos() {
    this.position = null;
  }
}
