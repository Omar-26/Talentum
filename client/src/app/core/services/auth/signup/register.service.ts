import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Company } from '@core/models/company';
import { User } from '@core/models/user';
import { ErrorHandler } from '@core/services/error-handling';
import { environment } from '@environments';
import { catchError, Observable } from 'rxjs';

@Injectable()
export class RegisterService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // Register User
  registerUser(user: User): Observable<User> {
    return this.http
      .post<User>(`${this.apiUrl}/auth/register-user`, user)
      .pipe(catchError(ErrorHandler.handleError));
  }

  // Register Company
  registerCompany(company: Company): Observable<Company> {
    return this.http
      .post<Company>(`${this.apiUrl}/auth/register-company`, company)
      .pipe(catchError(ErrorHandler.handleError));
  }

  // Login
}
