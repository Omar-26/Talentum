import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';

@Component({
  selector: 'app-full-job-card',
  templateUrl: './full-job-card.component.html',
  styleUrl: './full-job-card.component.scss',
})
export class FullJobCardComponent {
  @Input() backgroundColor: string = 'var(--accent-color)';
  @Input() job!: Job;
  @Input() category!: { name: string; icon: string };
  @Input() isChecked!: boolean;

  onSaveJob(): void {
    this.isChecked
      ? console.log('Job Status:', 'Saved')
      : console.log('Job Status:', 'Removed');
  }
}

// import { Component, Input } from '@angular/core';
// import { Router } from '@angular/router';
// import { Job } from '../../../shared/models/job';

// @Component({
//   selector: 'app-full-job-card',
//   templateUrl: './full-job-card.component.html',
//   styleUrl: './full-job-card.component.scss',
// })
// export class FullJobCardComponent {
//   @Input() backgroundColor: string = 'var(--accent-color)';
//   @Input() job!: Job;
//   @Input() category!: { name: string; icon: string };
//   @Input() isChecked!: boolean;

//   constructor(private router: Router) {}
//   onCardClick(jobId: number) {
//     fetch('assets/jobs-data.json')
//       .then((response) => response.json())
//       .then((jobs: Job[]) => {
//         const job = jobs.find((j) => j.id === jobId);
//         if (job) {
//           console.log('Job found:', job);
//           this.router.navigate(['/job-details'], { state: { job } });
//         } else {
//           console.error('Job not found');
//         }
//       })
//       .catch((error) => console.error('Error fetching jobs:', error));
//   }

//   onSaveJob(): void {
//     this.isChecked
//       ? console.log('Job Status:', 'Saved')
//       : console.log('Job Status:', 'Removed');
//   }
// }
