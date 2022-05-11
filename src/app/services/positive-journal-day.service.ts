import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { PositiveJournalDay } from '../models/positive-journal-day.model';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PositiveJournalDayService {
  journalDayServerUrl = 'http://localhost:3000/api/positiveThings';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  constructor(private http: HttpClient) {}

  addDay(
    positiveJournalDay: PositiveJournalDay
  ): Observable<PositiveJournalDay> {
    return this.http
      .post<PositiveJournalDay>(
        this.journalDayServerUrl,
        positiveJournalDay,
        this.httpOptions
      )
      .pipe(catchError(this.handleError));
  }

  getDay(date: string): Observable<PositiveJournalDay> {
    return this.http
      .get<PositiveJournalDay>(this.journalDayServerUrl + '/' + date)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    return throwError(
      () => new Error('Something bad happened; please try again later.')
    );
  }
}
