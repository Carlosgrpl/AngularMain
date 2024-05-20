import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FirstHeaderComponent } from './components/first-header/first-header.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
