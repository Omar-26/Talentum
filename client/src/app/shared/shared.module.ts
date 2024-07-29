import { NgModule } from '@angular/core';
import { ComponentsModule } from './components/components.module';
import { PrimengComponentsModule } from './primeng-components/primeng-components.module';

@NgModule({
  declarations: [],
  imports: [ComponentsModule, PrimengComponentsModule],
  exports: [ComponentsModule, PrimengComponentsModule],
})
export class SharedModule {}
