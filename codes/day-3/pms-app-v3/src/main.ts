import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import { PlatformRef } from '@angular/core';

const platformRef: PlatformRef = platformBrowser()

const loadPromise = platformRef
  .bootstrapModule(
    AppModule,
    {
      ngZoneEventCoalescing: true,
    }
  )
loadPromise
  .then(ref => console.log(ref.instance))
  .catch(err => console.error(err))

