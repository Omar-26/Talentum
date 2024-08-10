import { Component } from '@angular/core';
import { Job } from '@core/models/tempCodeRunnerFile';
import { UserService } from '@core/services/user/user.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userId = localStorage.getItem('id') || '0';
  user!: User;
  savedJobs: Job[] = [];
  dob!: string;

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.userService.getUserProfile(this.userId).subscribe((user) => {
      this.user = user;
      this.dob = formatDateToDayMonYear(user.dateOfBirth);
      this.loadSavedJobs();
    });
  }
  loadSavedJobs() {
    if (this.user) {
      this.userService.getSavedJobs(this.userId).subscribe((jobs) => {
        this.savedJobs = jobs;
      });
    }
  }

  goTo(id: string) {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
// should be in another file
function formatDateToDayMonYear(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  };
  if (typeof date === 'string') {
    date = new Date(date);
  }
  return date.toLocaleDateString('en-GB', options);
}
