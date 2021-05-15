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
    CoverComponent,
    CinemaComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
