import { enableProdMode, importProvidersFrom } from '@angular/core';
import {
  ApplicationConfig,
  bootstrapApplication,
} from '@angular/platform-browser';

import { appRouting } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';
import { CoreModule } from '@core/index';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    ...appRouting,
    importProvidersFrom(
      CoreModule.forRoot({
        application: {
          name: 'Layouti',
        },
        layout: {
          header: {
            type: 'floating',
          },
          sidebar: {
            collapsed: false,
          },
          theme: 'dark',
        },
      })
    ),
  ],
});
