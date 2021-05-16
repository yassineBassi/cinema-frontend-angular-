import { SignupComponent } from './signup/signup.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './auth.component';

const routes: Routes = [
  {
     path: '',
     component: AuthComponent,
     children: [
       {
        path: '',
        redirectTo: 'signin',
        pathMatch: 'full'
       },
       {
         path: 'signin',
         component: SigninComponent
       },
       {
         path: 'signup',
         component: SignupComponent
       }
     ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
