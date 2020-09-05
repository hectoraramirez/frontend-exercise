import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieviewComponent } from './movieview/movieview.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent,
    MovieviewComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent,
    MovieviewComponent
  ]
})
export class SharedModule { }
