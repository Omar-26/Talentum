import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { JobsRoutingModule } from './jobs-routing.module';
import { JobsComponent } from './jobs/jobs.component';

@NgModule({
  declarations: [JobsComponent],
  imports: [CommonModule, SharedModule, JobsRoutingModule],
  exports: [JobsComponent],
})
export class JobsModule {}
