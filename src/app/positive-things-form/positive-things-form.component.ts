import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PositiveJournalDay } from '../models/positive-journal-day.model';
import { PositiveJournalDayService } from '../services/positive-journal-day.service';
import * as moment from 'moment';

@Component({
  selector: 'app-positive-things-form',
  templateUrl: './positive-things-form.component.html',
  styleUrls: ['./positive-things-form.component.css'],
})
export class PositiveThingsFormComponent implements OnInit {
  todayDate = new Date();
  positiveThingsForm!: FormGroup;
  positiveJournalDay!: PositiveJournalDay;
  saveError = false;
  isDateSaved = false;
  showSpinner = false;

  constructor(private positiveJournalDayService: PositiveJournalDayService) {
    this.initPositiveJournalDay();
    this.setPositiveThingsFormGroup();
  }

  ngOnInit(): void {
    this.getPositiveThingsOfToday();
  }

  getPositiveThingsOfToday = () => {
    this.positiveJournalDayService
      .getDay(moment(new Date()).format('YYYY-MM-DD'))
      .subscribe((positiveJournalDay) => {
        this.positiveJournalDay = positiveJournalDay;
        this.positiveThingsForm.disable();
      });
  };

  initPositiveJournalDay() {
    this.positiveJournalDay = {
      date: moment(new Date()).format('YYYY-MM-DD'),
      firstPositiveThing: '',
      secondPositiveThing: '',
      thirdPositiveThing: '',
    };
  }

  setPositiveThingsFormGroup() {
    this.positiveThingsForm = new FormGroup({
      firstPositiveThing: new FormControl('', [Validators.required]),
      secondPositiveThing: new FormControl('', [Validators.required]),
      thirdPositiveThing: new FormControl('', [Validators.required]),
    });
  }

  get firstPositiveThing() {
    return this.positiveThingsForm.get('firstPositiveThing');
  }

  get secondPositiveThing() {
    return this.positiveThingsForm.get('secondPositiveThing');
  }

  get thirdPositiveThing() {
    return this.positiveThingsForm.get('thirdPositiveThing');
  }

  onSubmit() {
    if (this.positiveThingsForm.valid) {
      this.setPositiveJournalDayFromFormValues();
      this.showSpinner = true;
      this.saveError = false;
      this.positiveJournalDayService.addDay(this.positiveJournalDay).subscribe({
        next: () => {
          this.isDateSaved = true;
          this.showSpinner = false;
          this.positiveThingsForm.disable();
        },
        error: () => {
          this.saveError = true;
        },
      });
    }
  }

  setPositiveJournalDayFromFormValues() {
    this.positiveJournalDay.firstPositiveThing = this.firstPositiveThing?.value;
    this.positiveJournalDay.secondPositiveThing = this.secondPositiveThing?.value;
    this.positiveJournalDay.thirdPositiveThing = this.thirdPositiveThing?.value;
  }

  onUpdatePositiveThings() {
    this.isDateSaved = false;
    this.positiveThingsForm.enable();
  }
}
