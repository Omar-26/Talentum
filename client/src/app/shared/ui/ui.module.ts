import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonsModule } from './buttons/buttons.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule, FormsModule, ButtonsModule],
  exports: [ButtonsModule],
})
export class UiModule {}
