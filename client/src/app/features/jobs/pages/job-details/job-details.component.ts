import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '@core/models/job';
import { CategoryService, JobService } from '@core/services';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  @Input() jobId!: string | null;
  job!: Job;
  relatedJobs!: Job[];
  responsibilities!: string[];
  qualifications!: string[];
  benefits!: string[];

  constructor(
    private categoryService: CategoryService,
    private jobService: JobService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
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
    this.jobId = this.route.snapshot.paramMap.get('job-id');
    this.jobService.getJobById(this.jobId).subscribe((job) => {
      this.job = job;
      this.responsibilities = this.formatToList(job.responsibilities);
      this.qualifications = this.formatToList(job.qualifications);
      job.benefits ? (this.benefits = this.formatToList(job.benefits)) : null;
      this.getRelatedJobs();
    });
  }

  // Get Related Jobs
  getRelatedJobs(): void {
    this.categoryService
      .getJobsByCategory(this.job.category.id)
      .subscribe((jobs) => (this.relatedJobs = jobs));
  }

  // Save Job
  //   onSaveJob(): void {
  //     this.jobService.saveJob(this.jobId).subscribe((job) => {
  //       this.job = job;
  //     });
  //   }
}
