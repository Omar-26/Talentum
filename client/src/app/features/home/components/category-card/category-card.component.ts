import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Category } from '@core/models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.scss'],
})
export class CategoryCardComponent {
  @Input() category!: Category;
  @Input() isSelected: boolean = false;
  @Output() onSelect = new EventEmitter<void>();

  onClick(): void {
    this.onSelect.emit();
  }
}
