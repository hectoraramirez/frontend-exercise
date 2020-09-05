import { MaterialModule } from './../../material/material.module';
import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MovieComponent } from './movie/movie.component';
import { HomemainComponent } from './homemain/homemain.component';

@NgModule({
  declarations: [
    HomeComponent,
    MovieComponent,
    HomemainComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MaterialModule
  ]
})
export class HomeModule { }
