import { MoviesService } from './../../../services/movies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id: any;
  movieDesc: any;
  constructor( private rout: ActivatedRoute, private serviceMovie: MoviesService) {
    this.id = this.rout.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.getDetailsMovie();
  }

  /**
   * get detials of movie
   */
  getDetailsMovie() {
    this.serviceMovie.getDetailMovie(this.id).subscribe(
      res => {
        this.movieDesc = {
          title: res.title,
          overview: res.overview,
          language: res.languages,
          genres: res.genres,
          imgsrc: res.poster_path,
          releaseDate: res.release_date
        }
      }
      , error =>{
        console.log(error);
      });
  }

}
