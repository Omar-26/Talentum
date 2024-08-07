import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '@core/services/user/user.service';
import { User } from '../../../core/models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  userId!: any;
  user!: User;
  dob!: string;

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.userId = this.route.snapshot.paramMap.get('user-id');
    this.userService.getUserProfile(this.userId).subscribe((user) => {
      this.user = user;
      this.dob = formatDateToDayMonYear(user.dateOfBirth);
    });
  }
}

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
