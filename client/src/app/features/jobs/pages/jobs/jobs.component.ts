import { Component } from '@angular/core';
import { Category } from '@core/models/category';
import { Job } from '@core/models/job';
import { CategoryService, JobService } from '@core/services';
import { Observable } from 'rxjs';
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
  jobs!: Job[];
  filteredJobs: Job[] = [];
  categories!: Category[];

  // Filters

  jobTypes: string[] = [];

  //   jobTypes = ['Full Time', 'Part Time', 'Freelance', 'Internship'];
  experiences = ['No Experience', 'Entry Level', 'Mid Level', 'Senior Level'];
  datePosted = [
    'Last hour',
    'Last 24 hours',
    'Last 7 days',
    'Last 14 days',
    'Last 30 days',
  ];
  rangeValues: number[] = [0, 500000];

  // I want to collect the unique job types from the loaded jobs from the data base
  // and display them in the filter

  constructor(
    private categoryService: CategoryService,
    private jobService: JobService
  ) {}

  ngOnInit() {
    this.loadCategories();
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs.sort(() => 0.5 - Math.random());
      const existingJobTypes = this.jobs.map((job) => job.type);
      this.jobTypes = Array.from(new Set(existingJobTypes));
    });
  }
  loadCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  getJobsCountPerCategory(categoryId: number): number {
    return this.jobs.filter((job) => job.category.id === categoryId).length;
  }

  onChange(event: any) {
    let temporaryList: Job[] = [];
    let isCategoryChecked = event.target.checked;
    let checkedCategoryId = event.target.value;

    if (isCategoryChecked) {
      temporaryList = this.jobs.filter(
        (job) => job.category.id == checkedCategoryId
      );
      this.filteredJobs.push(...temporaryList);
    } else {
      temporaryList = this.filteredJobs.filter(
        (job) => job.category.id != checkedCategoryId
      );
      this.filteredJobs = [];
      this.filteredJobs.push(...temporaryList);
    }
  }

  //   onCategoryChange(index: number) {
  //     this.filterJobsByCategory(this.selectedCategories[index].id).subscribe(
  //       (jobs) => {
  //         this.filteredJobs.push(...jobs);
  //         // console.log('selected Category:', this.selectedCategories);
  //         console.log('Selected Category IDs:', this.getSelectedCategoryIds());
  //       }
  //     );
  //   }

  filterJobsByCategory(categoryId: number) {
    this.categoryService.getJobsByCategory(categoryId).subscribe((jobs) => {
      this.filteredJobs.push(...jobs);
    });
  }

  //   filterJobsByType(type: string) {
  //     return this.jobs.filter((job) => job.type === type);
  //   }

  //   Show all categories
  showAllCategories: boolean = false;
  showAllCategoriesText: string = 'Show';
  toggleCategories() {
    this.showAllCategories = !this.showAllCategories;
    this.showAllCategoriesText = this.showAllCategories ? 'Hide' : 'Show';
  }
}

//   first = 0;
//   rows = 6;
//   onPageChange(event: any) {
//     this.first = event.first;
//     this.rows = event.rows;
//     this.updatePaginatedJobs();
//   }

//   updatePaginatedJobs() {
//     const start = this.first;
//     const end = this.first + this.rows;
//     this.paginatedJobs = this.jobs.slice(start, end);
//   }
