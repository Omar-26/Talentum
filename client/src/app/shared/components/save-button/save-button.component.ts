import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-save-button',
  templateUrl: './save-button.component.html',
  styleUrls: ['./save-button.component.scss'],
})
export class SaveButtonComponent {
  @Output() isChecked!: boolean;
  iconSize: string = '24px';

  onClicked() {
    this.isChecked = !this.isChecked;
  }
}
