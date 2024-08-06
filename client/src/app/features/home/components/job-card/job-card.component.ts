import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

import { Job } from '@core/models/job';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  @Input() backgroundColor: string = 'var(--accent-color)';
  @Input() job!: Job;
  @Input() isVertical: boolean = true;
  @Input() isChecked!: boolean;
  constructor(private router: Router) {}

  onClicked(id: number): void {
    this.router.navigate(['/job-details', id]);
    console.log('Job ID:', id);
  }

  onSaveJob(): void {
    this.isChecked
      ? console.log('Job Status:', 'Saved')
      : console.log('Job Status:', 'Removed');
  }
}
