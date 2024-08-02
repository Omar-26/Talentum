import { Component, Input } from '@angular/core';
import { Job } from '../../models/job';

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

  onSaveJob(): void {
    this.isChecked
      ? console.log('Job Status:', 'Saved')
      : console.log('Job Status:', 'Removed');
  }
}
