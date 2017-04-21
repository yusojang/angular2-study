import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
}

//브라우저에서 Angular를 사용하기 위해 하는 것
platformBrowserDynamic().bootstrapModule(AppModule);
