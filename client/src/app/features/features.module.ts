import { NgModule } from '@angular/core';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';
import { UserModule } from './user/user.module';

@NgModule({
  declarations: [],
  imports: [AuthModule, HomeModule, JobsModule, UserModule, CompanyModule],
  exports: [AuthModule, HomeModule, JobsModule, UserModule, CompanyModule],
})
export class FeaturesModule {}
