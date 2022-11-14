import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { IConfig } from '@core/models';
import { CORE_CONFIG_TOKEN } from '@core/services/core';

@NgModule()
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error('Import CoreModule in the AppModule only');
    }
  }

  static forRoot(config: IConfig): ModuleWithProviders<CoreModule> {
    return {
      ngModule: CoreModule,
      providers: [{ provide: CORE_CONFIG_TOKEN, useValue: config }],
    };
  }
}
