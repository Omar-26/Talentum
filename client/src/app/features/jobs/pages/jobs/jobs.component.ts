import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Category } from '@core/models/category';
import { Job } from '@core/models/job';
import { CategoryService, JobService } from '@core/services';
import { ScrollService } from '@core/services/scroll/scroll.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrl: './jobs.component.scss',
})
export class JobsComponent {
  jobs!: Job[];
  filteredJobs: Job[] = [];
  paginatedJobs: Job[] = [];
  categories!: Category[];
  form: any;
  // Filters
  jobTypes: string[] = [];
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
    private jobService: JobService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      search: [''],
    });
  }

  ngOnInit() {
    this.loadCategories();
    this.loadJobs();
  }

  loadJobs() {
    this.jobService.getAllJobs().subscribe((jobs) => {
      //   this.jobs = jobs.sort(() => 0.5 - Math.random());
      this.jobs = jobs;
      const existingJobTypes = this.jobs.map((job) => job.type);
      this.jobTypes = Array.from(new Set(existingJobTypes));
      this.totalRecords = this.jobs.length;
      this.updatePaginatedJobs();
    });
  }
  loadCategories() {
    this.categoryService.getAllCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }
  getJobsCountPerCategory(categoryId: number): number {
    return this.jobs?.filter((job) => job.category.id === categoryId).length;
  }

  // Client Side Pagination
  first = 0;
  rows = 6;
  pageCount!: number;
  totalRecords!: number;
  onPageChange(event: any) {
    this.first = event.first;
    this.updatePaginatedJobs();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
  updatePaginatedJobs() {
    const start = this.first;
    const end = this.first + this.rows;
    this.paginatedJobs = (
      this.filteredJobs.length != 0 ? this.filteredJobs : this.jobs
    ).slice(start, end);
    this.totalRecords =
      this.filteredJobs.length != 0
        ? this.filteredJobs.length
        : this.jobs.length;
  }

  filterByCategory(event: any) {
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
    this.updatePaginatedJobs();
  }

  //   Show all categories
  showAllCategories: boolean = false;
  showAllCategoriesText: string = 'Show';
  toggleCategories() {
    this.showAllCategories = !this.showAllCategories;
    this.showAllCategoriesText = this.showAllCategories ? 'Hide' : 'Show';
  }
}
