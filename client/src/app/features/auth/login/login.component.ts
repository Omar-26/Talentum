import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Logger } from '../../../core/services/auth/logger/logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  type: string = 'password';
  passwordIcon: string = 'pi-eye-slash';
  submitted = false;
  loginForm: any;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          //   Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'),
        ],
      ],
    });
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  showPassword: boolean = false;

  logger = inject(Logger);
  router = inject(Router);

  login() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.logger
      .login(
        this.loginFormControls['email'].value as string,
        this.loginFormControls['password'].value as string
      )
      .subscribe({
        next: (data) => {
          if (data.role == 'user') {
            localStorage.setItem('id', data.id);
            localStorage.setItem('role', data.role);
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/';
          } else if (data.role == 'Company') {
            localStorage.setItem('id', data.id);
            localStorage.setItem('role', data.role);
            localStorage.setItem('isLoggedIn', 'true');
            window.location.href = '/';
          } else if (data.role === 'admin') {
          }
        },
        // error: (error) => {
        //   if (error.status === 401) {
        //     console.error('incorrect password');
        //   } else if (error.status === 404) {
        //     console.error('user not found');
        //   }
        // },
      });
    // reload the page
  }

  hideShowPass() {
    if (this.type === 'password') {
      this.type = 'text';
      this.passwordIcon = 'pi-eye';
    } else {
      this.type = 'password';
      this.passwordIcon = 'pi-eye-slash';
    }
  }
}
