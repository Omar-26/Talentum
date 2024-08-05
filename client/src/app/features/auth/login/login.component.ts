import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
          Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'),
        ],
      ],
    });
  }

  get loginFormControls() {
    return this.loginForm.controls;
  }

  showPassword: boolean = false;

  logger = inject(Logger);
  submitApplication() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      this.loginForm.markAllAsTouched();
      return;
    }
    this.logger.submitApplication(
      this.loginForm.value.email ?? '',
      this.loginForm.value.password ?? '',
      this.loginForm.value.remember ?? false
    );
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
