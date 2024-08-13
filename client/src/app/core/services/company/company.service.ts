import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '@core/models/company';
import { Job } from '@core/models/job';
import { environment } from '@environments/environment.development';
import { catchError, Observable } from 'rxjs';
import { ErrorHandler } from '../error-handling';

@Injectable()
export class CompanyService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  // GET Company by id
  getCompanyById(id: number): Observable<Company> {
    return this.http
      .get<Company>(`${this.apiUrl}/company/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  getCompanyJobs(id: number | string): Observable<Job[]> {
    return this.http
      .get<Job[]>(`${this.apiUrl}/company/jobs/${id}`)
      .pipe(catchError(ErrorHandler.handleError));
  }

  addJob(
    categoryId: string | number,
    companyId: string | number,
    job: Job
  ): Observable<Job> {
    return this.http
      .post<Job>(
        `${this.apiUrl}/company/add-job/category/${categoryId}/company/${companyId}`,
        job
      )
      .pipe(catchError(ErrorHandler.handleError));
  }
}
