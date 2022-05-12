import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositiveThingsCalendarComponent } from './positive-things-calendar.component';

describe('PositiveThingsCalendarComponent', () => {
  let component: PositiveThingsCalendarComponent;
  let fixture: ComponentFixture<PositiveThingsCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositiveThingsCalendarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositiveThingsCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
