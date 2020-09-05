import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-movieview',
  templateUrl: './movieview.component.html',
  styleUrls: ['./movieview.component.css']
})
export class MovieviewComponent implements OnInit {

  @Input() movieDesc: any;

  constructor() {}

  ngOnInit() {
    console.log(this.movieDesc);
  }

}
