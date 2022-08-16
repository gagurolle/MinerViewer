import { HttpInterceptor, HTTP_INTERCEPTORS } from '@angular/common/http';
import { enableProdMode, InjectionToken } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { AuthInterceptor } from './app/interceptor/auth';
import { environment } from './environments/environment';

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

export function getAuthUrl() {
  var y = document.getElementsByTagName('base')[0].href;
  return y;
}

export function getUrl() {
  return "https://localhost:7116/";
}
//const HTTP_INTERCEPTORS: InjectionToken<HttpInterceptor[]>;
const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] },
  { provide: 'AUTH_URL', useFactory: getAuthUrl, deps: [] },
  { provide: 'URL', useFactory: getUrl, deps: [] },
  {
    provide: HTTP_INTERCEPTORS, 
    useClass: AuthInterceptor, 
    multi: true,
    deps: []
  }
];

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));
