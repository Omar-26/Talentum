import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company/company.component';

@NgModule({
  declarations: [CompanyComponent],
  imports: [CommonModule, CompanyRoutingModule],
  exports: [CompanyComponent],
})
export class CompanyModule {}
