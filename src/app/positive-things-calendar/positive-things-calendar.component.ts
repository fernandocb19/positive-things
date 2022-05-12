import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';
import { PositiveJournalDayService } from '../services/positive-journal-day.service';
import { PositiveJournalDay } from '../models/positive-journal-day.model';

@Component({
  selector: 'app-positive-things-calendar',
  templateUrl: './positive-things-calendar.component.html',
  styleUrls: ['./positive-things-calendar.component.css'],
})
export class PositiveThingsCalendarComponent implements OnInit {
  selectedDate!: string;
  positiveJournalDay!: PositiveJournalDay | null;

  constructor(private positiveJournalDayService: PositiveJournalDayService) {}

  ngOnInit(): void {}

  setSelectedDate(date: Date) {
    this.selectedDate = moment(date).format('YYYY-MM-DD');
    this.getPositiveThingsOfSelectedDay();
  }

  getPositiveThingsOfSelectedDay = () => {
    const date = moment(this.selectedDate).format('YYYY-MM-DD');
    this.positiveJournalDayService.getDay(date).subscribe({
      next: (positiveJournalDay) =>
        (this.positiveJournalDay = positiveJournalDay),
      error: () => (this.positiveJournalDay = null),
    });
  };
}
