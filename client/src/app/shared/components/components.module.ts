import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { CategoryCardComponent } from './category-card/category-card.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { JobCardComponent } from './job-card/job-card.component';
import { SaveButtonComponent } from './save-button/save-button.component';

@NgModule({
  declarations: [
    CategoryCardComponent,
    JobCardComponent,
    SaveButtonComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [
    CategoryCardComponent,
    JobCardComponent,
    SaveButtonComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
  ],
})
export class ComponentsModule {}
