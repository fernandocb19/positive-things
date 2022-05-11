import { TestBed } from '@angular/core/testing';

import { PositiveJournalDayService } from './positive-journal-day.service';

describe('PositiveThingsService', () => {
  let service: PositiveJournalDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PositiveJournalDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
