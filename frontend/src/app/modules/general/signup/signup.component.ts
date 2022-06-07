import { Component, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { ConfigService } from 'src/app/services/config/config.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  // config service
  configService: ConfigService;
  signupForm: FormGroup;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router, injector: Injector) {
    this.signupForm = new FormGroup({
      user_email: new FormControl(null, [Validators.required, Validators.email]),
      user_password: new FormControl(null, [Validators.required]),
      user_confirmPassword: new FormControl(null, [Validators.required])
    });
    this.configService = injector.get(ConfigService);
  }

  ngOnInit(): void {
    document.getElementsByTagName('html')[0].style.height = '100%';
  }
  onSubmit(): void {
    const _payloads = {
      'email': this.signupForm.get('user_email')?.value,
      'password': this.signupForm.get('user_password')?.value,
    };
    this.authService.AuthSignup(_payloads, this.configService.config.endpoint + "/users/").subscribe({
      next: data => {
        console.log(data);
        this.isSuccessful = true;
        this.isSignUpFailed = false;
        this.router.navigate(['/login']);
      },
      error: err => {
        this.errorMessage = err.error.error;
        this.isSignUpFailed = true;
      }
    });
    
  }
}
