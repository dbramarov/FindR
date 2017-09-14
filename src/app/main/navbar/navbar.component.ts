import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './../../user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy, OnInit {
  subscription: Subscription;
  position: number;
  currentUser;
  users = [];

  constructor(private _router: Router, private _userService: UserService) {
    this.subscription = this._userService.observedUsers.subscribe(
      (users) => this.users = users,
      (err) => {},
      () => {}
    )
  }

  ngOnInit() {
    this.position = this._userService.getUserPosition();
    this.currentUser = this.users[this.position];
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  logout() {
    this._userService.clearPos();
    this._router.navigate(['/']);
  }
}
