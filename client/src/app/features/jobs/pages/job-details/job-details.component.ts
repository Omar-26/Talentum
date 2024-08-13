import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { categoryIcons } from '@core/models/category';
import { Job } from '@core/models/job';
import { CategoryService, JobService } from '@core/services';
import { LocalStorageService } from '@core/services/local-storage/local-storage.service';
import { UserService } from '@core/services/user/user.service';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  @Input() jobId!: string | number;
  role!: string;
  job!: Job;
  isBookmarked!: boolean;
  userId = localStorage.getItem('id') || '0';
  relatedJobs!: Job[];
  responsibilities!: string[];
  qualifications!: string[];
  benefits!: string[];

  constructor(
    private categoryService: CategoryService,
    private userService: UserService,
    private jobService: JobService,
    private route: ActivatedRoute,
    private router : Router,
    private storage: LocalStorageService
  ) {}

  ngOnInit() {
    this.role = this.storage.getRole();
    this.loadJobDetails();
  }
  // add to utils
  formatToList: any = (str: string) => {
    return str
      .split(/[,\.]/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  };

  // Get Page Data
  loadJobDetails(): void {
    this.jobId = this.route.snapshot.paramMap.get('job-id') || '0';
    this.jobService.getJobById(this.jobId).subscribe((job) => {
      this.job = job;
      this.job.category.icon = categoryIcons[this.job.category.name];
      this.responsibilities = this.formatToList(job.responsibilities);
      this.qualifications = this.formatToList(job.qualifications);
      job.benefits ? (this.benefits = this.formatToList(job.benefits)) : null;
      this.isInSavedJobsList(this.userId);
      this.getRelatedJobs();
    });
  }

  // Get Related Jobs
  getRelatedJobs(): void {
    this.categoryService
      .getJobsByCategory(this.job.category.id)
      .subscribe(
        (jobs) =>
          (this.relatedJobs = jobs.sort(() => 0.5 - Math.random()).slice(0, 3))
      );
  }

  // Save Job
  onSaveJob(): void {
    this.isBookmarked = !this.isBookmarked;
    if (this.isBookmarked) {
      this.userService.saveJob(this.userId, this.jobId).subscribe();
    } else {
      this.userService.unSaveJob(this.jobId).subscribe();
    }
  }
  isInSavedJobsList(userId: string): void {
    if (localStorage.getItem('id')) {
      this.userService
        .isInSavedJobs(userId, this.jobId)
        .subscribe((res: boolean) => {
          this.isBookmarked = res;
        });
    }
  }

  // Apply to job
  onApplyToJob(): void {
    this.router.navigate([`job-details/${this.jobId}/apply-to-job`]);
  }
}
