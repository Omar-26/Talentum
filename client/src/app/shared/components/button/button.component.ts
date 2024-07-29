import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})
export class ButtonComponent {
  @Input() isSelected: boolean = false;
  @Input() width!: string;
  @Input() height!: string;
  @Input() backgroundColor!: string;
  @Input() icon!: string;
  @Input() label: string = 'submit';
  @Input() fontSize!: string;
  @Input() fontWeight!: string;
  @Output() onSelect = new EventEmitter<void>();

  onClick(): void {}
}
