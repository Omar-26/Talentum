import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrl: './job-card.component.scss',
})
export class JobCardComponent {
  @Input() backgroundColor: string = 'var(--accent-color)';
  @Input() job!: {
    title: string;
    type: string;
    companyLogo: string;
    companyName: string;
    location: string;
    description: string;
    tags: string[];
  };
  @Input() isVertical: boolean = true;
  @Input() isChecked!: boolean;

  onSaveJob(): void {
    this.isChecked
      ? console.log('Job Status:', 'Saved')
      : console.log('Job Status:', 'Removed');
  }
}
