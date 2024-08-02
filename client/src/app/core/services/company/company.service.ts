import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class CompanyService {
  private apiUrl = 'api/company'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  getCompanyProfile(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  updateCompanyProfile(profileData: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, profileData);
  }
}
