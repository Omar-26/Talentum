import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { ComponentsModule } from './components';
import { Logger } from './services/logger/logger';

@NgModule({
  declarations: [],
  imports: [SharedModule],
  exports: [ComponentsModule],
  providers: [Logger],
})
export class CoreModule {}
