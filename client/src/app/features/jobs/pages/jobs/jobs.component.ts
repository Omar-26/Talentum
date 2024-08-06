import { Component } from '@angular/core';
import { Category } from '@core/models/category';
import { Job } from '@core/models/job';
import { CategoryService, JobService } from '@core/services';
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
  // Make them of their types
  jobs!: any[];
  categories!: any[];
  numOfJobsPerCategory!: any;
  isChecked: boolean = false;
  // jobs: Job[] = jobs.sort(() => 0.5 - Math.random());

  // Filters
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

  constructor(
    private categoryService: CategoryService,
    private jobService: JobService
  ) {}

  ngOnInit() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
    this.jobService.getAllJobs().subscribe((jobs) => {
      this.jobs = jobs;
    });
    this.categoryService
      .getNumberOfJobsPerCategory(1)
      .subscribe((numOfJobs) => {
        this.numOfJobsPerCategory = numOfJobs;
      });
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

    this.jobs = this.jobs.filter((job) =>
      this.selectedCategories.some((categoryId) =>
        this.filterJobsByCategory(categoryId).includes(job)
      )
    );

    if (this.selectedCategories.length === 0) {
      this.jobs = this.jobs;
    }
  }

  filterJobsByType(type: string) {
    return this.jobs.filter((job) => job.type === type);
  }

  filterJobsByCategory(categoryId: number) {
    return this.jobs.filter((job) => job.categoryId === categoryId);
  }

  //   Show all categories
  showAllCategories: boolean = false;
  showAllCategoriesText: string = 'Show';
  toggleCategories() {
    this.showAllCategories = !this.showAllCategories;
    this.showAllCategoriesText = this.showAllCategories ? 'Hide' : 'Show';
  }

  first = 0;
  rows = 6;
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
}
