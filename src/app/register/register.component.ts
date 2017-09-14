import { UserService } from './../user.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnDestroy {
  subscription: Subscription;

  user = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    passwordconf: '',
    street: '',
    unit: '',
    city: '',
    state: '',
    createdAt: new Date()
  };

  users = [];
  temp = [];

  constructor(private _router: Router, private _userService: UserService) {
    this.subscription = this._userService.observedUsers.subscribe(
      (users) => this.users = users,
      (err) => {},
      () => {}
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSubmit() {
    if (!this.users) {
      this.temp.push(this.user);
      this._userService.updateUsers(this.temp);
    } else {
      this.users.push(this.user);
      this._userService.updateUsers(this.users);
    }
    alert('Thank you for registering with us!');
    this._router.navigate(['/']);
  }

}
