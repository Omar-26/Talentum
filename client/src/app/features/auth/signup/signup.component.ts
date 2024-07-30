import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isRightPanelActive = false;

  onRegisterCompany() {
    this.isRightPanelActive = true;
  }
  onRegisterUser() {
    this.isRightPanelActive = false;
  }
  onSignup(type: string) {
    if (type === 'user') {
      // Add user data to the database
      console.log('User registered');
    } else if (type === 'company') {
      // Add company data to the database
      console.log('Company registered');
    }
  }
}
