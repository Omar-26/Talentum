import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PaginatorModule } from 'primeng/paginator';
import { PasswordModule } from 'primeng/password';
import { SliderModule } from 'primeng/slider';
@NgModule({
  declarations: [],
  imports: [CommonModule, FloatLabelModule, FormsModule],
  exports: [PaginatorModule, SliderModule, PasswordModule],
})
export class PrimengComponentsModule {}
