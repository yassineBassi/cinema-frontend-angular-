import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CoverComponent } from './cover/cover.component';
import { CinemaComponent } from './cinema/cinema.component';

@NgModule({
  declarations: [
    HomeComponent,
    CoverComponent,
    CinemaComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ],
})
export class HomeModule { }
