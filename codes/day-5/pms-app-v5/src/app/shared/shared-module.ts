import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';
import { PageNotFound } from './components/page-not-found/page-not-found';
import { SharedRoutingModule } from './shared-routing-module';

@NgModule({
  declarations: [
    Home,
    Dashboard,
    PageNotFound
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [Dashboard]
})
export class SharedModule { }
