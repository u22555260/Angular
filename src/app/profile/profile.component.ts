import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent implements OnInit{

  username!: string;
  password!: string;

  ngOnInit() {
    this.username = localStorage.getItem('username')!;
    this.password = localStorage.getItem('password')!;
  }

}
