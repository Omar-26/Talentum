import { Component } from '@angular/core';
import { Category } from '@core/models/category';
import { Job } from '@core/models/job';
import { CategoryService, JobService } from '@core/services';
import { switchMap } from 'rxjs';
import { latestJobs } from '../../../../testing-data';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  buttonLabel: string = 'Show ';
  buttonIcon: string = 'pi-arrow-right';
  selectedCardIndex: number | null = null;
  showAllCategories: boolean = false;
  categories: Category[] = [];
  featuredJobs!: Job[];
  latestJobs = latestJobs;

  constructor(
    private categoryService: CategoryService,
    private jobService: JobService
  ) {}
  ngOnInit(): void {
    // To make the Jobs Fetching wait till the category fetching is done
    this.categoryService
      .getAllCategories()
      .pipe(
        switchMap((categories) => {
          this.categories = categories;
          return this.jobService.getFeaturedJobs(categories[0].id);
        })
      )
      .subscribe((jobs) => {
        this.featuredJobs = jobs;
      });
    this.selectedCardIndex = 0;
  }

  onCategorySelected(categoryId: number, index: number) {
    this.selectedCardIndex = index;
    this.jobService.getFeaturedJobs(categoryId).subscribe((jobs) => {
      this.featuredJobs = jobs;
    });
  }

  showAll(): void {
    this.buttonIcon = this.showAllCategories
      ? 'pi-arrow-right'
      : 'pi-arrow-down';
    this.buttonLabel = this.showAllCategories ? 'Show ' : 'Hide ';
    this.showAllCategories = !this.showAllCategories;
  }
}
