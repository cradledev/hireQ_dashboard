import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  constructor(private authService: AuthService, private router : Router) {
    this.signupForm = new FormGroup({
      user_name: new FormControl(null, [Validators.required]),
      user_email: new FormControl(null, [Validators.required, Validators.email]),
      user_password: new FormControl(null, [Validators.required]),
      user_confirmPassword: new FormControl(null, [Validators.required])
    });
  }

  ngOnInit(): void {
    document.getElementsByTagName('html')[0].style.height = '100%';
  }
  onSubmit(): void {
    this.router.navigate(['/dashboard']);
  }
}
