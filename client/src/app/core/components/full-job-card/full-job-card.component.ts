import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { categoryIcons } from '@core/models/category';
import { Job } from '@core/models/job';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-full-job-card',
  templateUrl: './full-job-card.component.html',
  styleUrl: './full-job-card.component.scss',
})
export class FullJobCardComponent {
  isBookmarked!: boolean;
  userId!: string;
  role!: string;
  @Input() backgroundColor: string = 'var(--accent-color)';
  @Input() job!: Job;

  constructor(
    private router: Router,
    private storage: LocalStorageService,
    private userService: UserService
  ) {}

  ngOnInit(): void {
    this.role = this.storage.getRole();
    this.userId = this.storage.getUserId();
    this.job.category.icon = categoryIcons[this.job.category.name];
    this.isInSavedJobsList(this.userId);
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
    if (localStorage.getItem('id')) {
      this.userService
        .isInSavedJobs(userId, this.job.id)
        .subscribe((res: boolean) => {
          this.isBookmarked = res;
        });
    }
  }

  // On Job Details Button CLicked
  onClicked(jobId: number): void {
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      if (this.router.url !== `/job-details/${jobId}`) {
        this.router.navigate(['/job-details', jobId]);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}
