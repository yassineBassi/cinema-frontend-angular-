import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user;

  constructor() { }

  ngOnInit(): void {
    this.getUser();
  }

  getUser(){
    this.user = JSON.parse(window.localStorage.getItem('user') + "");
  }

}
