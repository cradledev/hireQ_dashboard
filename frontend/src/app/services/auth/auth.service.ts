import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) {
  }

  // Auth logic to run auth providers
  AuthLogin(_payloads: any, url: string): Observable<any> {
    return this.http.post(url, {
      "email": _payloads.email,
      "password": _payloads.password
    }, httpOptions)
  }

  AuthSignup(_payloads: any, url: string): Observable<any> {
    return this.http.post(url, {
      'email': _payloads.email,
      'password': _payloads.password,
      'type': "admin"
    }, httpOptions);
  }
}
