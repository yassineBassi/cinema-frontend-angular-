import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  signupLoading;
  error;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(signupData){
    console.log(signupData);
    this.error = null
    this.signupLoading = true;
    this.authService.signup(signupData)
    .subscribe(
      resp => {
        this.signupLoading = false;
        console.log(resp);
        this.router.navigateByUrl('/auth/signin?flash=Account created successfully, sign in now !!')
      },
      err => {
        this.signupLoading = false;
        this.error = err.error.message;
        console.log(err);
      }
    )
  }

}
