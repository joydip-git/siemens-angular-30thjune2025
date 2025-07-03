import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registration } from './components/registration/registration';
import { Login } from './components/login/login';
import { UsersRoutingModule } from './users-routing-module';



@NgModule({
  declarations: [
    Registration,
    Login
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
