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

  //  Get All Jobs
  getAllJobs(): Observable<Job[]> {
    return this.http
      .get<Job[]>(`${this.apiUrl}/jobs`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  //  get job by id
  getJobById(id: string | null): Observable<Job> {
    return this.http
      .get<Job>(`${this.apiUrl}/jobs/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  //  Get Featured Jobs
  getAllJobsPerCategory(id: number): Observable<Job[]> {
    return this.http
      .get<Job[]>(`${this.apiUrl}/category/category-jobs/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
