import { MaterialModule } from './../material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    MoviesListComponent
  ]
})
export class SharedModule { }
