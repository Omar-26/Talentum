import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '@core/models/company';
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
}
