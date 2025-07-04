import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductsModule } from './products/products-module';
import { UsersModule } from './users/users-module';
import { SharedModule } from './shared/shared-module';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors } from '@angular/common/http';
import { TokenInterceptorService } from './services/token-interceptor-service';

@NgModule({
  //components, directives, pipes
  declarations: [
    App
  ],
  //modules
  imports: [
    ProductsModule,
    UsersModule,
    SharedModule,
    BrowserModule,
    //AppRoutingModule
    RouterModule.forRoot([])
  ],
  //services
  providers: [
    provideBrowserGlobalErrorListeners(),

    //use the following when you create interceptor as function (preferred)
    provideHttpClient(withInterceptors([TokenInterceptorService]))

    //use the following when you create interceptor as class
    // HttpClinetModule,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useExisting: TokenInterceptorService,
    //   multi: true
    // }
  ],
  bootstrap: [App]
})
export class AppModule { }
