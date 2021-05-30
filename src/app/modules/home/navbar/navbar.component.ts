import { DataService } from './../../../services/data.service';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnChanges {

  @Input() user;
  @Input() roles: string[];
  dashboardUrl: string;

  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit(): void {
    this.dashboardUrl = this.dataService.url + "/dashboard";
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.user);
  }

  signout(){
    window.localStorage.removeItem('user');
    window.localStorage.removeItem('token');
    this.router.navigate(["/auth"]);
  }

  isAdmin(){
    console.log(this.roles);
    return false;
  }

}
