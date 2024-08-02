import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isRightPanelActive = false;
  showPassword = false;
  showConfirmPassword = false;
  passwordIcon: string = 'pi-eye-slash';
  confirmPasswordIcon: string = 'pi-eye-slash';
  editorText: string = 'Add Description';

  userSignupForm: any;
  companySignupForm: any;
  constructor(private fb: FormBuilder) {
    this.userSignupForm = this.fb.group(
      {
        firstName: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z]+$')],
        ],
        lastName: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z]+$')],
        ],
        username: ['', [Validators.required, Validators.minLength(5)]],
        email: ['', [Validators.required, Validators.email]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'),
          ],
        ],
        phoneNumber: [
          '',
          [Validators.required, Validators.pattern('^\\d{11}$')],
        ],
        confirmPassword: ['', [Validators.required]],
        dateOfBirth: [
          '',
          [
            Validators.required,
            Validators.pattern(/^\d{4}-\d{2}-\d{2}$/),
            this.minDateValidator(new Date('1900-01-01')),
            this.maxDateValidator(new Date('2014-01-01')),
          ],
        ],
      },
      { validators: confirmPasswordValidator('password', 'confirmPassword') }
    );

    this.companySignupForm = this.fb.group(
      {
        companyName: [
          '',
          [Validators.required, Validators.pattern('^[a-zA-Z]+$')],
        ],
        email: ['', [Validators.required, Validators.email]],
        website: ['', [Validators.required]],
        industry: ['', [Validators.required]],
        address: ['', [Validators.required]],
        password: [
          '',
          [
            Validators.required,
            Validators.minLength(8),
            Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
      },
      { validators: confirmPasswordValidator('password', 'confirmPassword') }
    );
  }
  minDateValidator(minDate: Date) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = new Date(control.value);
      return value >= minDate ? null : { minDate: true };
    };
  }
  maxDateValidator(maxDate: Date) {
    return (control: AbstractControl): ValidationErrors | null => {
      const value = new Date(control.value);
      return value <= maxDate ? null : { maxDate: true };
    };
  }
  get userFormControls() {
    return this.userSignupForm.controls;
  }
  get companyFormControls() {
    return this.companySignupForm.controls;
  }

  togglePassword(): void {
    this.showPassword = !this.showPassword;
    this.passwordIcon = this.showPassword ? 'pi-eye' : 'pi-eye-slash';
  }

  toggleConfirmPassword(): void {
    this.showConfirmPassword = !this.showConfirmPassword;
    this.confirmPasswordIcon = this.showConfirmPassword
      ? 'pi-eye'
      : 'pi-eye-slash';
  }

  onRegisterCompany() {
    this.isRightPanelActive = true;
  }
  onRegisterUser() {
    this.isRightPanelActive = false;
  }
  onSignup(type: string) {
    console.log(this.editorText);
    if (type === 'user') {
      if (this.userSignupForm.invalid) {
        this.userSignupForm.markAllAsTouched();
        return;
      }
      console.log('User registered:');
    } else if (type === 'company') {
      if (this.companySignupForm.invalid) {
        this.companySignupForm.markAllAsTouched();
        return;
      }
      console.log('Company registered');
    }
  }
}

export function confirmPasswordValidator(
  passwordKey: string,
  confirmPasswordKey: string
) {
  return (group: AbstractControl): ValidationErrors | null => {
    const password = group.get(passwordKey);
    const confirmPassword = group.get(confirmPasswordKey);
    return password &&
      confirmPassword &&
      password.value === confirmPassword.value
      ? null
      : { notMatching: true };
  };
}
