import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinLoading = false;
  error: string;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signin(signinForm){
    this.error = "";
    this.signinLoading = true;
    console.log('signin');
    this.authService.signin(signinForm)
    .subscribe(
      (resp: any) => {
        console.log('resp');
        console.log(resp);
        if(resp.data){
          resp = resp.data;
          window.localStorage.setItem("token", resp.token);
          window.localStorage.setItem("user", JSON.stringify(resp.user));
          this.router.navigate(['/home']);
          this.signinLoading = false;
        }
      },
      err => {
        this.signinLoading = false;
        console.log(err);
        this.error = err.error.message;
      }
    )
  }

}