import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  //array test of list of movies
  movieslist: any [] = [
    {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }, {
      movie: 'movie1' ,
      title: 'movieTitle1',
      id: 1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
