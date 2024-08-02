import { Injectable } from '@angular/core';

@Injectable()
export class Logger {
  constructor() {}

  submitApplication(email: string, password: string, remember: boolean) {
    console.log(
      `Email: ${email}, Password: ${password}, Remember: ${remember}`
    );
  }
}
