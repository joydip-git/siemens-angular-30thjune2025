import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductList } from './products/components/product-list/product-list';
import { ProductService } from './products/services/product.service';

@NgModule({
  declarations: [
    App, ProductList
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    ProductService
  ],
  bootstrap: [App]
})
export class AppModule { }
