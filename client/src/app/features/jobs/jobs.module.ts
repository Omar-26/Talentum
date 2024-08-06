import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { CoreModule } from '@core';
import { SharedModule } from '@shared';
import { FullJobCardComponent } from './components/full-job-card/full-job-card.component';
import { JobsRoutingModule } from './jobs-routing.module';
import { ApplyToJobComponent } from './pages/apply-to-job/apply-to-job.component';
import { JobDetailsComponent } from './pages/job-details/job-details.component';
import { JobsComponent } from './pages/jobs/jobs.component';

@NgModule({
  declarations: [
    JobsComponent,
    JobDetailsComponent,
    ApplyToJobComponent,
    FullJobCardComponent,
  ],
  imports: [
    CommonModule,
    JobsRoutingModule,
    RouterModule,
    RouterLink,
    SharedModule,
    CoreModule,
  ],
  exports: [],
})
export class JobsModule {}
