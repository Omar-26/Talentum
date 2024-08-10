import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Job } from '@core/models/job';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  isBookmarked!: boolean;
  userId!: string;
  role!: string;
  @Input() backgroundColor: string = 'var(--accent-color)';
  @Input() job!: Job;
  @Input() isVertical: boolean = true;
  @Input() isChecked!: boolean;
  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.userId = this.storage.getUserId();
    this.role = this.storage.getRole();
    this.isInSavedJobsList(this.userId);
  }

  onClicked(jobId: number): void {
    this.router.navigate(['/job-details', jobId]);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  onSaveJob(): void {
    this.isBookmarked = !this.isBookmarked;
    if (this.isBookmarked) {
      this.userService.saveJob(this.userId, this.job.id).subscribe();
    } else {
      this.userService.unSaveJob(this.job.id).subscribe();
    }
  }

  isInSavedJobsList(userId: string): void {
    if (this.userId) {
      this.userService
        .isInSavedJobs(userId, this.job.id)
        .subscribe((res: boolean) => {
          this.isBookmarked = res;
        });
    }
  }
}
