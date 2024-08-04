import { Component } from '@angular/core';
import { Job } from '@core/models/job';
import { categories, featuredJobs } from '../../../../../testing-data';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrl: './job-details.component.scss',
})
export class JobDetailsComponent {
  job: Job = {
    id: 234,
    categoryId: 101,
    title: 'Software Engineer',
    type: 'Full Time',
    companyLogo:
      'https://upload.wikimedia.org/wikipedia/commons/c/ce/X_logo_2023.svg',
    companyName: 'X (formerly Twitter)',
    location: 'San Francisco, CA',
    salary: '$120,000 - $150,000',
    gender: 'Any',
    experience: '3+ years',
    description:
      'Looking for a skilled Software Engineer to develop and maintain high-performance applications.',
    responsibilities:
      'Write clean, scalable code, debug and test new software, collaborate with cross-functional teams.',
    qualifications:
      "Bachelor's degree in Computer Science or related field. Proficiency in Java, Python, or C++.",
    benefits: 'Health insurance, stock options, remote work flexibility.',
    tags: ['software development', 'Full Time', 'San Francisco', 'tech'],
  };
  //   sort by category, job title, company, or location
  relatedJobs: Job[] = featuredJobs
    .filter(
      (job) =>
        job.title === this.job.title ||
        job.categoryId === this.job.categoryId ||
        (job.location === this.job.location && job.id !== this.job.id)
    )
    .sort(() => 0.5 - Math.random());
  responsibilities: string[] = [];
  qualifications: string[] = [];
  benefits: string[] = [];
  ngOnInit() {
    this.responsibilities = this.formatToList(this.job.responsibilities);
    this.qualifications = this.formatToList(this.job.qualifications);
    this.benefits
      ? (this.benefits = this.formatToList(this.job.benefits))
      : null;
  }

  getCategoryById: any = (categoryId: number) => {
    return categories.find((category) => category.id === categoryId);
  };

  formatToList: any = (str: string) => {
    return str
      .split(/[,\.]/)
      .map((item) => item.trim())
      .filter((item) => item.length > 0);
  };
}

// import { Component } from '@angular/core';
// import { Router } from '@angular/router';
// import { categories, featuredJobs } from '../../../../testing-data';
// import { Job } from '../../../shared/models/job';

// @Component({
//   selector: 'app-job-details',
//   templateUrl: './job-details.component.html',
//   styleUrl: './job-details.component.scss',
// })
// export class JobDetailsComponent {
//   job: any = {};
//   relatedJobs: Job[] = featuredJobs
//     .filter(
//       (job) =>
//         job.title === this.job.title ||
//         job.categoryId === this.job.categoryId ||
//         (job.location === this.job.location && job.id !== this.job.id)
//     )
//     .sort(() => 0.5 - Math.random());
//   responsibilities: string[] = [];
//   qualifications: string[] = [];

//   constructor(private router: Router) {}

//   ngOnInit() {
//     console.log('ngOnInit called');
//     console.log('Initial job state:', this.job);

//     if (this.job && this.job.responsibilities && this.job.qualifications) {
//       this.responsibilities = this.formatToList(this.job.responsibilities);
//       this.qualifications = this.formatToList(this.job.qualifications);

//       // Initialize relatedJobs after job is set
//       this.relatedJobs = featuredJobs
//         .filter(
//           (job) =>
//             job.title === this.job.title ||
//             job.categoryId === this.job.categoryId ||
//             (job.location === this.job.location && job.id !== this.job.id)
//         )
//         .sort(() => 0.5 - Math.random());
//       console.log('Related jobs:', this.relatedJobs); // Debugging log
//     } else {
//       console.error('Job is undefined or missing required properties');
//       console.log('Job state:', this.job);
//     }
//   }

//   getCategoryById: any = (categoryId: number) => {
//     return categories.find((category) => category.id === categoryId);
//   };

//   formatToList: any = (str: string) => {
//     if (!str) {
//       console.error('formatToList received undefined or empty string');
//       return [];
//     }
//     return str
//       .split(/[,\.]/)
//       .map((item) => item.trim())
//       .filter((item) => item.length > 0);
//   };

// //   getCategoryById: any = (categoryId: number) => {
// //     return categories.find((category) => category.id === categoryId);
// //   };

// //   formatToList: any = (str: string) => {
// //     return str
// //       .split(/[,\.]/)
// //       .map((item) => item.trim())
// //       .filter((item) => item.length > 0);
// //   };
// }
