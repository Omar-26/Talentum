import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Logger } from '../../../core/services/logger/logger';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  type: string = 'password';
  eyeIcon: string = 'pi-eye-slash';
  submitted = false;

  constructor() {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    remember: new FormControl(false),
  });

  logger = inject(Logger);

  submitApplication() {
    this.submitted = true;
    if (this.loginForm.invalid) {
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
      this.eyeIcon = 'pi-eye';
    } else {
      this.type = 'password';
      this.eyeIcon = 'pi-eye-slash';
    }
  }
}
