import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
@NgModule({
  declarations: [],
  imports: [CommonModule, FloatLabelModule, FormsModule],
  exports: [FloatLabelModule],
})
export class PrimengComponentsModule {}
