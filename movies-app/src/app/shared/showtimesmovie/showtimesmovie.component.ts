import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-showtime',
  templateUrl: './showtimesmovie.component.html',
  styleUrls: ['./showtimesmovie.component.css']
})
export class ShowtimesmovieComponent implements OnInit {

  @Output() showtime = new EventEmitter();

  listSchedule: any [] = [{
    schedule: '9:00 am - 10:00 am'
  }, {
    schedule: '10:30 am - 11:30 am'
  }, {
    schedule: '12:00 am - 1:00 pm'
  }, {
    schedule: '1:30 pm - 2:30 pm'
  }, {
    schedule: '3:00 pm - 4:00 pm'
  }, {
    schedule: '4:30 pm - 5:30 pm'
  }, {
    schedule: '6:00 pm - 7:00 pm'
  }, {
    schedule: '7:30 pm - 8:30 pm'
  }, {
    schedule: '9:00 pm - 10:00 pm'
  }, {
    schedule: '10:30 pm - 11:00 pm'
  }];

  datesScheduler: any [] = [];
  scheduleDay: any[] = [];

  constructor() { }

  ngOnInit() {
    this.loadShowTimes();
    this.scheduleDay = this.loadSchedules();
  }

  /**
   * array showtime  of day
   */
  loadShowTimes() {
    for (let i = 0; i < 5; i++) {
      const date = new Date();
      date.setDate( date.getDate() + i);
      this.datesScheduler.push(date);
    }
  }

  /**
   *
   */
  loadSchedules(): any [] {
    const tmp: any [] = [];
    for (let i = 0; i <= 5 ; i++) {
      tmp.push(this.listSchedule[Math.floor (Math.random() * this.listSchedule.length)]);
    }
    return tmp.sort();
  }

  /**
   * send to timeshow of root component
   * @param showtimeSelect
   */
  getShowTime(showtimeSelect) {
    this.showtime.emit({ showtime: showtimeSelect});
  }
}
