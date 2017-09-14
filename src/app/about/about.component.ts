import { UserService } from './../user.service';
import { PhotoService } from './../photo.service';

import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, OnDestroy {
  subscription: Subscription;
  position: number;
  currentUser;
  users: Array<any> = [];
  location: string;
  searches;

  constructor(private userService: UserService, private sanitizer: DomSanitizer, private _httpService: PhotoService) {
    this.subscription = this.userService.observedUsers.subscribe(
      (users) => this.users = users,
      (err) => {},
      () => {}
    )
   }

  ngOnInit() {
    this.searches = this._httpService.getSearch();
    this.position = this.userService.getUserPosition();
    this.currentUser = this.users[this.position];
    this.location = this.currentUser.street + ' ' + this.currentUser.city + ' ' + this.currentUser.state;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  sanitize() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(
        'https://www.google.com/maps/embed/v1/place?key=AIzaSyAjV1uOI2KteAEQOn7CDo6GeJ9qcWo8CGM&q='
         + this.location);
  }
}
