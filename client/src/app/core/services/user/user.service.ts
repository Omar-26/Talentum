import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '@core/models/user';
import { environment } from '@environments';
import { catchError, Observable } from 'rxjs';
import { ErrorHandler } from '../error-handling';

@Injectable()
export class UserService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // Get User Profile
  getUserProfile(userId: number): Observable<User> {
    return this.http
      .get<User>(`${this.apiUrl}/user/profile/${userId}`)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
