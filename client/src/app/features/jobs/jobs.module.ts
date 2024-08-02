import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { JobDetailsComponent } from './job-details/job-details.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [JobsComponent, JobDetailsComponent],
  imports: [CommonModule, SharedModule, JobsRoutingModule],
  exports: [JobsComponent, JobDetailsComponent],
})
export class JobsModule {}
