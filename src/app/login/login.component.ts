import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { UserService } from './../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  subscription: Subscription;

  user = {
    email: '',
    password: ''
  }

  users = [];
  emailErrors: Boolean = false;
  passErrors: Boolean = false;

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

  onSubmit(form: HTMLFormElement) {
    // console.log(form);
    let emailMatch: Boolean = false;
    let passMatch: Boolean = false;

    for (let i = 0; i < this.users.length; i++) {
        if (this.users[i].email === this.user.email  ) {
            emailMatch = true;
            if (this.users[i].password === this.user.password) {
                this._userService.updateUserPosition(i);
                this._router.navigate(['/main/home']);
            }
        } else {
            continue;
        }
    }
    if (emailMatch === false) {
        this.emailErrors = true;
    } else {
        this.emailErrors = false
    }
    if (passMatch === false) {
        this.passErrors = true;
    }
  }
}
