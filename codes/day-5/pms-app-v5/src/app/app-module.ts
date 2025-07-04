import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { ProductsModule } from './products/products-module';
import { UsersModule } from './users/users-module';
import { SharedModule } from './shared/shared-module';
import { RouterModule } from '@angular/router';

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
    provideBrowserGlobalErrorListeners()
  ],
  bootstrap: [App]
})
export class AppModule { }
