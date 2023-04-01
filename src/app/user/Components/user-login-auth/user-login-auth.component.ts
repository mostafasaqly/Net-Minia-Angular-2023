import { Component, OnInit } from '@angular/core';
import { UserAuthService } from '../../Services/user-auth.service';

@Component({
  selector: 'app-user-login-auth',
  templateUrl: './user-login-auth.component.html',
  styleUrls: ['./user-login-auth.component.css']
})
export class UserLoginAuthComponent implements OnInit {
user:boolean = false;

constructor(private userService : UserAuthService) {


}
  ngOnInit(): void {
    this.user = this.userService.UserState;
  }
  userLogin()
  {
    this.userService.login('static@gmai.com', '123456');
    this.user = this.userService.UserState; // true
  }
  userLogout()
  {
    this.userService.logout();
    this.user = this.userService.UserState; // false
  }
}
