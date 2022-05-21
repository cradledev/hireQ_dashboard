import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn : boolean = false;
  isLoginFailed : boolean = false;

  constructor(private authService: AuthService, private router : Router) {
    this.loginForm = new FormGroup({
      user_email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    document.getElementsByTagName('html')[0].style.height = '100%';
  }
  onSubmit(): void {
    if (this.authService.AuthLogin({ 'user_email': this.loginForm.get('user_email')?.value, 'password': this.loginForm.get('password')?.value }) ) {
      this.isLoggedIn = true;
      this.isLoginFailed = false;
      // this.reloadPage();
      window.location.href = "/dashboard";
    } else {
      this.isLoginFailed = true;
      this.isLoggedIn = false;
    }
  }
}
