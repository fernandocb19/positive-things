import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

@Component({
  selector: 'app-positive-things-form',
  templateUrl: './positive-things-form.component.html',
  styleUrls: ['./positive-things-form.component.css'],
})
export class PositiveThingsFormComponent implements OnInit {
  todayDate = new Date();
  positiveThingsForm!: FormGroup;

  constructor() {}

  ngOnInit(): void {
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
}
