import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { categories, featuredJobs } from '../../../../testing-data';
import { Category } from '../../../shared/models/category';
import { Job } from '../../../shared/models/job';

// interface PageEvent {
//   first: number | undefined;
//   rows: number | undefined;
//   page: number | undefined;
//   pageCount: number | undefined;
// }

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  categories = categories;
  isChecked: boolean = false;
  featuredJobs: Job[] = featuredJobs.sort(() => 0.5 - Math.random());
  filteredJobs: any[] = [];
  paginatedJobs: any[] = [];
  jobTypes = ['Full Time', 'Part Time', 'Freelance', 'Internship'];
  experiences = ['No Experience', 'Entry Level', 'Mid Level', 'Senior Level'];
  datePosted = [
    'Last hour',
    'Last 24 hours',
    'Last 7 days',
    'Last 14 days',
    'Last 30 days',
  ];
  rangeValues: number[] = [0, 500000];

  ngOnInit() {
    this.updatePaginatedJobs();
    // this.filteredJobs = this.featuredJobs;
  }

  checkedCategories: { [key: number]: boolean } = {};
  selectedCategories: number[] = [];
  onCategoryChange(categoryId: number) {
    this.checkedCategories[categoryId] = !this.checkedCategories[categoryId];

    if (this.checkedCategories[categoryId]) {
      this.selectedCategories.push(categoryId);
    } else {
      this.selectedCategories = this.selectedCategories.filter(
        (id) => id !== categoryId
      );
    }

    this.filteredJobs = this.featuredJobs.filter((job) =>
      this.selectedCategories.some((categoryId) =>
        this.filterJobsByCategory(categoryId).includes(job)
      )
    );

    if (this.selectedCategories.length === 0) {
      this.filteredJobs = this.featuredJobs;
    }
  }

  filterJobsByType(type: string) {
    return this.featuredJobs.filter((job) => job.type === type);
  }

  filterJobsByCategory(categoryId: number) {
    return this.featuredJobs.filter((job) => job.categoryId === categoryId);
  }

  showAllCategories: boolean = false;
  showAllCategoriesText: string = 'Show';
  toggleCategories() {
    this.showAllCategories = !this.showAllCategories;
    this.showAllCategoriesText = this.showAllCategories ? 'Hide' : 'Show';
  }

  getCategoryById(id: number): { name: string; icon: string } {
    const category = this.categories.find((category) => category.id === id)!;
    return { name: category.name, icon: category.icon };
  }
  first = 0;
  rows = 6;
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

  //   constructor(private http: HttpClient) {}

  //   fetchFilteredJobs(filters: any) {
  //     const params = new URLSearchParams();
  //     if (filters.category) params.append('category', filters.category);
  //     if (filters.jobType) params.append('jobType', filters.jobType);
  //     if (filters.experience) params.append('experience', filters.experience);
  //     if (filters.datePosted) params.append('datePosted', filters.datePosted);

  //     return this.http.get(`/api/jobs?${params.toString()}`);
  //   }

  //   // Example usage in component
  //   filters = {
  //     category: selectedCategoryId,
  //     jobType: selectedJobTypeId,
  //     experience: selectedExperienceId,
  //     datePosted: selectedDatePostedId,
  //   };
}
