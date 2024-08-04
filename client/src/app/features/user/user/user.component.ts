import { Component } from '@angular/core';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  user: User = {
    id: 1,
    firstName: 'Jake',
    lastName: 'Smith',
    jobTitle: 'Software Engineer',
    gender: 'male',
    username: 'jake74',
    email: 'jake@Talentum.com',
    password: 'P@assW0rd',
    phoneNumber: '+20 0111-844-7335',
    dateOfBirth: new Date('1990-05-15'),
    createdAt: new Date('2024-08-03T00:02:34.000Z'),
  };
  dob!: string;
  ngOnInit() {
    this.dob = formatDateToDayMonYear(this.user!.dateOfBirth);
  }
}

function formatDateToDayMonYear(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  return date.toLocaleDateString('en-GB', options);
}

const dateOfBirth = new Date('1990-05-15');
const formattedDateOfBirth = formatDateToDayMonYear(dateOfBirth);

console.log('Formatted dateOfBirth:', formattedDateOfBirth); // Example output: "15-May-1990"
