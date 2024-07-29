import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category!: {
    id: number;
    name: string;
    icon: string;
    numOfJobs: number;
  };
  @Input() isSelected: boolean = false;
  @Output() onSelect = new EventEmitter<void>();

  onClick(): void {
    this.onSelect.emit();
  }
}
