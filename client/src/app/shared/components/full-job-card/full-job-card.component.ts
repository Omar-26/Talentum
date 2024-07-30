import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-full-job-card',
  templateUrl: './full-job-card.component.html',
  styleUrl: './full-job-card.component.scss',
})
export class FullJobCardComponent {
  @Input() backgroundColor: string = 'var(--accent-color)';
  @Input() job!: {
    id: number;
    categoryId: number;
    title: string;
    type: string;
    companyLogo: string;
    companyName: string;
    location: string;
    salary: string;
    gender: string;
    experience: string;
    description: string;
    responsibilities: string;
    qualifications: string;
    benefits: string;
    tags: string[];
  };
  @Input() category!: { name: string; icon: string };

  @Input() isChecked!: boolean;

  onSaveJob(): void {
    this.isChecked
      ? console.log('Job Status:', 'Saved')
      : console.log('Job Status:', 'Removed');
  }
}
