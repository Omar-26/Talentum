import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Job } from '@core/models/job';
import { JobService } from '@core/services';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  @Input() jobId!: string | null;
  job!: Job;

  constructor(private jobService: JobService, private route: ActivatedRoute) {}

  //   sort by category, job title, company, or location
  relatedJobs!: Job[];
  //     .filter(
  //       (job) =>
  //         job.title === this.job.title ||
  //         job.categoryId === this.job.categoryId ||
  //         (job.location === this.job.location && job.id !== this.job.id)
  //     )
  //     .sort(() => 0.5 - Math.random());

  responsibilities!: string[];
  qualifications!: string[];
  benefits!: string[];
  ngOnInit() {
    this.jobId = this.route.snapshot.paramMap.get('id');
    this.jobService.getJobById(this.jobId).subscribe((job) => {
      this.job = job;
      this.responsibilities = this.formatToList(job.responsibilities);
      this.qualifications = this.formatToList(job.qualifications);
      job.benefits ? (this.benefits = this.formatToList(job.benefits)) : null;
    });
  }
  formatToList: any = (str: string) => {
    return str
      .split(/[,\.]/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  };
}
