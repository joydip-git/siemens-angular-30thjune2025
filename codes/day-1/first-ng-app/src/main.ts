import { PlatformRef } from "@angular/core";
import { platformBrowser } from "@angular/platform-browser";
import { AppModule } from "./app/app-module";

console.log('Starting Angular application...');

const platformRef: PlatformRef = platformBrowser()
platformRef
  .bootstrapModule(AppModule,
    { ngZoneEventCoalescing: true }).catch(
      (err) => console.log(err)
    )