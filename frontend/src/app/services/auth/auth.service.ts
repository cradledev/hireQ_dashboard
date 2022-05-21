import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    public router: Router
  ) { }
  get isLoggedIn(): boolean {
    const user = JSON.parse(localStorage.getItem('user')!);
    return user !== null ? true : false;
  }

  // Auth logic to run auth providers
  AuthLogin(provider: any) :boolean {
    if (provider.user_email == "admin@gmail.com" && provider.password == "admin") {
      localStorage.setItem('user', JSON.stringify(provider));
      return true;
    } else {
      localStorage.setItem('user', JSON.stringify(null));
      return false;
    }
  }

  AuthSignup (provider : any) {
    
  }
  // Sign out
  SignOut() {
    localStorage.removeItem('user');
    return this.router.navigate(['/login']);
  }
}
