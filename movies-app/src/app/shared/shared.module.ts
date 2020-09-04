import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { FilterSMovieComponent } from './filter-smovie/filter-smovie.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent,
    FilterSMovieComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent,
    FilterSMovieComponent
  ]
})
export class SharedModule { }
