import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { Home } from './components/home/home';
import { PageNotFound } from './components/page-not-found/page-not-found';

const sharedRoutes: Routes = [
  {
    path: 'home', component: Home
  },
  {
    path: '', pathMatch: 'full', redirectTo: '/home'
  },
  {
    path: '**', component: PageNotFound
  }
]

@NgModule({
  imports: [RouterModule.forChild(sharedRoutes)],
  exports: [RouterModule],
})
export class SharedRoutingModule { }
