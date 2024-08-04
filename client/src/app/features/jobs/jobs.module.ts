import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { FullJobCardComponent } from './components/full-job-card/full-job-card.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobsComponent } from './pages/jobs/jobs.component';

@NgModule({
  declarations: [JobsComponent, FullJobCardComponent, JobDetailsComponent],
  imports: [CommonModule, JobsRoutingModule, SharedModule, CoreModule],
  exports: [JobsComponent, JobDetailsComponent],
})
export class JobsModule {}
