import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
})
export class SignupComponent {
  isRightPanelActive = false;

  onSignUpClick() {
    this.isRightPanelActive = true;
  }

  onSignInClick() {
    this.isRightPanelActive = false;
  }
}
