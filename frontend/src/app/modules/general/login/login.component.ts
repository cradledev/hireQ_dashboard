import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { TokenStorageService } from 'src/app/services/auth/token-storage.service';
import { ConfigService } from 'src/app/services/config/config.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  isLoggedIn : boolean = false;
  isLoginFailed : boolean = false;
  errorMessage = '';
  constructor(private authService: AuthService, private router : Router, private tokenStorage : TokenStorageService, private configService : ConfigService) {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
    }
    this.loginForm = new FormGroup({
      user_email: new FormControl(null, [Validators.email, Validators.required]),
      password: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    document.getElementsByTagName('html')[0].style.height = '100%';
  }
  onSubmit(): void {
    const _payloads = {
      "email" : this.loginForm.get('user_email')?.value,
      "password" : this.loginForm.get('password')?.value,
    };
    this.authService.AuthLogin(_payloads, this.configService.config.endpoint + "/users/admin/login").subscribe({
      next : data => {
        this.tokenStorage.saveToken(data.jwt_token);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.reloadPage();
      },
      error : err => {
        this.errorMessage = err.error.error;
        this.isLoginFailed = true;
      }
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
