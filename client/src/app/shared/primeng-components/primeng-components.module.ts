import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CheckboxModule } from 'primeng/checkbox';
import { EditorModule } from 'primeng/editor';
import { FloatLabelModule } from 'primeng/floatlabel';
import { PaginatorModule } from 'primeng/paginator';
import { SliderModule } from 'primeng/slider';
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PaginatorModule,
    FloatLabelModule,
    SliderModule,
    EditorModule,
    CheckboxModule,
  ],
  exports: [
    PaginatorModule,
    FloatLabelModule,
    SliderModule,
    EditorModule,
    CheckboxModule,
  ],
})
export class PrimeNgComponentsModule {}
