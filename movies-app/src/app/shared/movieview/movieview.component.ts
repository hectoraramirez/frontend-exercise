import { Observable } from 'rxjs';
import { MoviesService } from './../../services/movies.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movieview',
  templateUrl: './movieview.component.html',
  styleUrls: ['./movieview.component.css']
})
export class MovieviewComponent implements OnInit {

  @Input() idMovie: string;
  movieDesc: Observable<any>;
  constructor(private serviceMovie: MoviesService) {}

  ngOnInit() {
    this.getDetailsMovie();
  }

  /**
   * get detials of movie
   */
  getDetailsMovie() {
    this.movieDesc = this.serviceMovie.getDetailMovie(this.idMovie);
  }

}
