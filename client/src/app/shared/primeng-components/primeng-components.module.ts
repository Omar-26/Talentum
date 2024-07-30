import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PaginatorModule } from 'primeng/paginator';

@NgModule({
  declarations: [],
  imports: [CommonModule, FloatLabelModule, FormsModule],
  exports: [FloatLabelModule, PaginatorModule],
})
export class PrimengComponentsModule {}
