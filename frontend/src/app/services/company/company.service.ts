import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  // get all company count
  getAllCompaniesCount(url: string): Observable<any> {
    return this.http.get(url, httpOptions).pipe(catchError(this.errorHandler));
  }

  getCompanies(url: string): Observable<any> {
    return this.http.get(url, httpOptions).pipe(catchError(this.errorHandler));
  }

  errorHandler(err: any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
