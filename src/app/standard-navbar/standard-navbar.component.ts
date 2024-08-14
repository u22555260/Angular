import { Component } from '@angular/core';

@Component({
  selector: 'app-standard-navbar',
  templateUrl: './standard-navbar.component.html',
  styleUrl: './standard-navbar.component.scss'
})
export class StandardNavbarComponent {
  loginShow!: boolean;
  profileShow!: boolean;

  logStatus!: string;

  constructor() {}

  ngOnInit() {
    const loginStatus = localStorage.getItem("loggedIn");
    if(loginStatus == 'true')
      {
        this.loginShow = true;
        this.profileShow = false;
      }
      else if(loginStatus == 'false')
      {
        this.loginShow = false;
        this.profileShow = true;
      }
      else
      {
        this.loginShow = false;
        this.profileShow = true;
      }
  }

  logout() {
    localStorage.setItem('loggedIn', 'false');
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    localStorage.removeItem('password');
    localStorage.removeItem('roles');
    location.reload();
  }
}
