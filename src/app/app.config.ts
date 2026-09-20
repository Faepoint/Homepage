import { ApplicationConfig } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { provideServerRendering, withRoutes } from '@angular/ssr';
import { routes } from './app.routes';
import { serverRoutes } from './app.routes.server';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(
      routes,
      withInMemoryScrolling({
        scrollPositionRestoration: 'top'
      })
    ),
    provideServerRendering(withRoutes(serverRoutes))
  ]
};
