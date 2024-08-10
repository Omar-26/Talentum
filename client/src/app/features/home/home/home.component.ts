import { Component } from '@angular/core';
import { Category } from '@core/models/category';
import { Company } from '@core/models/company';
import { Job } from '@core/models/job';
import { CategoryService, JobService } from '@core/services';
import { AdminService } from '@core/services/admin/admin.service';
import { switchMap } from 'rxjs';

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
  latestJobs!: Job[];
  companies!: Company[];

  constructor(
    private categoryService: CategoryService,
    private jobService: JobService
  ) // private adminService: AdminService
  {}
  ngOnInit(): void {
    // To make the Jobs Fetching wait till the category fetching is done
    this.categoryService
      .getAllCategories()
      .pipe(
        switchMap((categories) => {
          this.categories = categories;
          return this.jobService.getAllJobsPerCategory(categories[0].id!);
        })
      )
      .subscribe((jobs) => {
        this.featuredJobs = jobs;
      });
    this.selectedCardIndex = 0;
  }

  onCategorySelected(categoryId: number, index: number) {
    this.selectedCardIndex = index;
    this.jobService.getAllJobsPerCategory(categoryId).subscribe((jobs) => {
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

  scrollToElement(id: string): void {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
