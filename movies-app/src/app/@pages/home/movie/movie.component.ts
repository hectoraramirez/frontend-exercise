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
  movieDesc$;

  showtime: any = '';
  placeRoom: any = '';

  constructor( private rout: ActivatedRoute, private serviceMovie: MoviesService) {
    this.id = this.rout.snapshot.paramMap.get('id');
  }

  ngOnInit() {

  }

  /**
   * get information of showtime
   * @param event
   */
  getShowtime(event) {
    this.showtime = event.showtime;
  }

  /**
   * send information of ticket
   * @param event
   */
  sendTicket(event) {
    this.placeRoom =  event.place;
    console.log(this.placeRoom);
    console.log(this.showtime);

  }

}
