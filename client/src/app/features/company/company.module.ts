import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CompanyRoutingModule } from './company-routing.module';
import { AddJobComponent } from './pages/add-job/add-job.component';
import { CompanyComponent } from './pages/company/company.component';

@NgModule({
  declarations: [CompanyComponent, AddJobComponent],
  imports: [CommonModule, CompanyRoutingModule],
  exports: [],
})
export class CompanyModule {}
