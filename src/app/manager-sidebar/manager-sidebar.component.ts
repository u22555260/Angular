import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-sidebar',
  templateUrl: './manager-sidebar.component.html',
  styleUrl: './manager-sidebar.component.scss'
})
export class ManagerSidebarComponent {

  loginShow!: boolean;
  profileShow!: boolean;

  logStatus!: string;

  constructor( private router: Router ) {}

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

    this.router.navigate(['login']);
  }


}
