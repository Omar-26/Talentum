import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrl: './save-button.component.scss',
})
export class SaveButtonComponent {
  @Output() isChecked!: boolean;
  iconSize: string = '24px';

  onClicked() {
    this.isChecked = !this.isChecked;
  }
}
