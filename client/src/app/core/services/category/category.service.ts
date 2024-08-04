import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '@core/models/category';
import { environment } from '@environments';
import { catchError, Observable } from 'rxjs';
import { ErrorHandler } from '../error-handling';

@Injectable()
export class CategoryService {
  apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  // Get all Categories
  getAllCategories(): Observable<Category[]> {
    return this.http
      .get<Category[]>(`${this.apiUrl}/allcategory`)
      .pipe(catchError(ErrorHandler.handleError));
  }
}
