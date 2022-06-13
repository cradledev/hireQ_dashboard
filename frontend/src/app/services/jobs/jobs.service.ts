import { Injectable } from '@angular/core';
import { throwError, Observable, catchError } from 'rxjs';
import { HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}
@Injectable({
  providedIn: 'root'
})
export class JobsService {

  constructor(private http: HttpClient) { }

  // get query
  executeGetQuery(url : string) : Observable<any> {
    return this.http.get(url, {...httpOptions, withCredentials : false}).pipe(catchError(this.errorHandler));
  }
  // execute query with token
  executeGetQueryWithToken (url : string) : Observable<any> {
    return this.http.get(url, {...httpOptions, withCredentials : true}).pipe(catchError(this.errorHandler));
  }

  errorHandler(err: any) {
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      errorMessage = err.error.message;
    } else {
      console.log(err);
      errorMessage = `Error Code: ${err.status}\nMessage: ${err.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
