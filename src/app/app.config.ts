import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {provideHttpClient, withInterceptors} from '@angular/common/http';
import {provideAnimationsAsync} from '@angular/platform-browser/animations/async';
import {provideToastr} from 'ngx-toastr';
import {ConfirmationService} from 'primeng/api';
import {customInterceptor} from './shared/interceptors/custom.interceptor';
import {errorInterceptor} from './shared/interceptors/error.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideAnimationsAsync(),
    provideToastr(),
    provideHttpClient(withInterceptors([customInterceptor, errorInterceptor])),
    ConfirmationService
  ]
};
