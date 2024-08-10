import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CoreModule } from '@core';
import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [UserComponent],
  imports: [CommonModule, UserRoutingModule, CoreModule],
  exports: [],
})
export class UserModule {}
