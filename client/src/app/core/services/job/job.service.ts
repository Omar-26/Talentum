import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Job } from '@core/models/job';
import { environment } from '@environments';
import { catchError, Observable } from 'rxjs';
import { ErrorHandler } from '../error-handling';
@Injectable()
export class JobService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  //  Get Featured Jobs
  getFeaturedJobs(id: number): Observable<Job[]> {
    return this.http
      .get<Job[]>(`${this.apiUrl}/user/cat-jobs/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
