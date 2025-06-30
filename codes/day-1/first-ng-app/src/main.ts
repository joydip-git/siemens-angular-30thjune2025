import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

// setTimeout(() => {
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
// }, 5000);

