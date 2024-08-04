import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { JobService } from '@core/services';
import { CategoryService } from '@core/services/category/category.service';
import { SharedModule } from '@shared';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { HomeModule } from './home/home.module';
import { JobsModule } from './jobs/jobs.module';
import { UserModule } from './user/user.module';
@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    CoreModule,
    AuthModule,
    HomeModule,
    JobsModule,
    UserModule,
    CompanyModule,
  ],
  exports: [AuthModule, HomeModule, JobsModule, UserModule, CompanyModule],
  providers: [CategoryService, JobService],
})
export class FeaturesModule {}
