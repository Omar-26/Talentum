import { Component } from '@angular/core';
import { categories, featuredJobs, latestJobs } from '../../../../testing-data';

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
  categories = categories;
  featuredJobs = featuredJobs;
  latestJobs = latestJobs;
  filteredJobs!: any[];

  ngOnInit(): void {
    this.filterJobsByCategory(this.categories.at(0)!.id, 0);
  }

  filterJobsByCategory(categoryId: number, index: number) {
    this.selectedCardIndex = index;
    this.filteredJobs = this.featuredJobs.filter(
      (job) => job.categoryId === categoryId
    );
  }

  showAll(): void {
    this.buttonIcon = this.showAllCategories
      ? 'pi-arrow-right'
      : 'pi-arrow-down';
    this.buttonLabel = this.showAllCategories ? 'Show ' : 'Hide ';
    this.showAllCategories = !this.showAllCategories;
  }
}
