import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-positive-things-calendar',
  templateUrl: './positive-things-calendar.component.html',
  styleUrls: ['./positive-things-calendar.component.css']
})
export class PositiveThingsCalendarComponent implements OnInit {

  selectedDate!: string;

  constructor() { }

  ngOnInit(): void {
  }

  setSelectedDate(date: Date) {
    this.selectedDate = moment(date).format('YYYY-MM-DD');
  }

}
