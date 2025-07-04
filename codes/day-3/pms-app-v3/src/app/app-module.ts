import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductsModule } from './products/products-module';

@NgModule({
  //components, directives, pipes
  declarations: [
    App
  ],
  //modules
  imports: [
    ProductsModule,
    BrowserModule,
    AppRoutingModule
  ],
  //services
  providers: [
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
