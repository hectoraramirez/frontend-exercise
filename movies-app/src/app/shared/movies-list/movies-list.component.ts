import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})

export class MoviesListComponent implements OnInit {
  //array test of list of movies
  movieslist: any [] = [];
  constructor() { }

  ngOnInit() {

    for (let id = 0; id <= 100; id ++) {
      this.movieslist.push(
        {
          titulo: 'titulo de la pelicula' + id,
          genero: 'terror',
          clasificacion: 'AAA',
          duracion: 30
        }
      )
    }

  }

}
