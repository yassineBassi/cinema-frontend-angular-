import { NavbarComponent } from './navbar/navbar.component';
import { SharesModule } from './../shares/shares.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoverComponent } from './cover/cover.component';
import { CinemaComponent } from './cinema/cinema.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    CinemaComponent,
    CoverComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule,
    SharesModule
  ],
})
export class HomeModule { }
