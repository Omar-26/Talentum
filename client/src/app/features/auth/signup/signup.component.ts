import { Component } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from '@core/services/auth/signup/register.service';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  isRightPanelActive = false;
  show = false;
  passwordIcon: string = 'pi-eye-slash';
  editorText: string = 'Add Company Description';
  userSignupForm: FormGroup;
  companySignupForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registerService: RegisterService,
    private router: Router,
    private messageService: MessageService
  ) {
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
            // Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).+$'),
          ],
        ],
        confirmPassword: ['', [Validators.required]],
        description: ['', [Validators.required]],
        logo: [null, Validators.required],
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

  showPassword(): void {
    this.show = !this.show;
    this.passwordIcon = this.show ? 'pi-eye' : 'pi-eye-slash';
  }

  onRegisterCompany() {
    this.isRightPanelActive = true;
  }

  onRegisterUser() {
    this.isRightPanelActive = false;
  }

  onEditorContentChange(content: string) {
    this.editorText = content;
  }

  onFileChange(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.companySignupForm.patchValue({
        logo: file,
      });
    }
  }

  registerUser() {
    if (this.userSignupForm.invalid) {
      this.userSignupForm.markAllAsTouched();
      return;
    }
    const user = { ...this.userSignupForm.value };
    delete user.confirmPassword;
    this.messageService.add({
      icon: 'pi pi-check',
      summary: 'Success',
      detail: 'Account Registered Successfully',
      life: 2500,
    });
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 3000);
    this.registerService.registerUser(user).subscribe();
  }

  registerCompany() {
    const formData = new FormData();
    const companyData = JSON.stringify({
      name: this.companyFormControls['companyName'].value,
      email: this.companyFormControls['email'].value,
      website: this.companyFormControls['website'].value,
      location: this.companyFormControls['address'].value,
      industry: this.companyFormControls['industry'].value,
      password: this.companyFormControls['password'].value,
      description: this.editorText,
    });

    const logoFile = this.companyFormControls['logo'].value;
    if (logoFile instanceof File) {
      const reader = new FileReader();
      reader.onload = () => {
        const logoData = reader.result as string;
        const combinedData = `${companyData};${logoData}`;
        formData.append(
          'data',
          new Blob([combinedData], { type: 'text/plain' })
        );

        this.registerService.registerCompany(formData).subscribe(
          (response) => {
            this.messageService.add({
              icon: 'pi pi-check',
              summary: 'Success',
              detail: response.message,
              life: 2500,
            });
            setTimeout(() => {
              this.router.navigate(['/login']);
            }, 3000);
          },
          (error) => {
            console.error('Error registering company:', error);
            if (error.error instanceof ErrorEvent) {
              console.error('Client-side error:', error.error.message);
            } else {
              console.error(
                `Backend returned code ${error.status}, body was: ${error.error}`
              );
            }
          }
        );
      };
      reader.readAsText(logoFile);
    } else {
      console.error('Logo is not a valid file');
      return;
    }
  }
}

// custom validator to check that two fields match add to another file
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
