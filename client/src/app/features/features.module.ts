import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';


@NgModule({
  declarations: [],
  imports: [AuthModule, HomeModule, JobsModule],
  exports: [AuthModule, HomeModule, JobsModule],
})
export class FeaturesModule {}
