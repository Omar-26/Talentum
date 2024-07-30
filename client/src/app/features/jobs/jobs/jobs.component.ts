import { Component } from '@angular/core';
import { PaginatorState } from 'primeng/paginator';
import { categories, featuredJobs } from '../../../../testing-data';

interface PageEvent {
  first: number | undefined;
  rows: number | undefined;
  page: number | undefined;
  pageCount: number | undefined;
}

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  categories = categories;
  featuredJobs = featuredJobs.sort(() => 0.5 - Math.random());
  paginatedJobs: any[] = [];
  first = 0;
  rows = 10;

  ngOnInit() {
    this.updatePaginatedJobs();
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    this.updatePaginatedJobs();
  }

  updatePaginatedJobs() {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedJobs = this.featuredJobs.slice(start, end);
  }

  getCategoryById(id: number): { name: string; icon: string } {
    const category = this.categories.find((category) => category.id === id)!;
    return { name: category.name, icon: category.icon };
  }
}
