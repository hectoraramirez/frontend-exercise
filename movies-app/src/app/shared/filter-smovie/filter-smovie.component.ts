import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-smovie',
  templateUrl: './filter-smovie.component.html',
  styleUrls: ['./filter-smovie.component.css']
})
export class FilterSMovieComponent implements OnInit {

  //list of test
  genres: any [] = [
    'Action',
    'Adventure',
    'Australia',
    'Comedy',
    'Christmas',
    'Documentary',
    'Drama',
    'Family',
    'Horror',
    'Romance',
    'Sci-fi',
    'Superheroes'
  ];

  //list of test
  classifications: any [] = [
    'G',
    'PG',
    'M',
    'MA 15+',
    'R 18+',
    'X 18+'
  ];
  constructor() { }

  ngOnInit() {
  }

}
