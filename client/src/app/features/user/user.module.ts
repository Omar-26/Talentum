import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { ApplyToJobComponent } from './apply-to-job/apply-to-job.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UserComponent, ApplyToJobComponent],
  imports: [CommonModule, CoreModule],
  exports: [UserComponent],
})
export class UserModule {}
