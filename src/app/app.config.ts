import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';

import { routes } from './app.routes';
// import {
//   provideClientHydration,
//   withEventReplay,
// } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withHashLocation()),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideAnimationsAsync(),
    provideHttpClient()
    // provideRouter(routes, withHashLocation()),
    // provideZoneChangeDetection({ eventCoalescing: true }),
    // provideClientHydration(withEventReplay()),
    // provideAnimationsAsync(),
  ],
};
