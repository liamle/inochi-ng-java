import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { InochihouseSharedLibsModule, InochihouseSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [InochihouseSharedLibsModule, InochihouseSharedCommonModule],
  declarations: [JhiLoginModalComponent, HasAnyAuthorityDirective],
  entryComponents: [JhiLoginModalComponent],
  exports: [InochihouseSharedCommonModule, JhiLoginModalComponent, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class InochihouseSharedModule {
  static forRoot() {
    return {
      ngModule: InochihouseSharedModule
    };
  }
}
