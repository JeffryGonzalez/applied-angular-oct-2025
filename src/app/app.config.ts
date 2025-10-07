import {
  ApplicationConfig,
  provideZonelessChangeDetection,
} from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
  withViewTransitions,
} from '@angular/router';

import { provideHttpClient, withFetch } from '@angular/common/http';
import { routes } from './app.routes';
import { DemoService } from '../shared/demo-service';

export const appConfig: ApplicationConfig = {
  providers: [
    DemoService, // One provider for this, now will be injectable everywhere.
    provideZonelessChangeDetection(),
    provideRouter(
      routes,
      withPreloading(PreloadAllModules),
      withViewTransitions(),
    ),
    provideHttpClient(withFetch()),
  ],
};
