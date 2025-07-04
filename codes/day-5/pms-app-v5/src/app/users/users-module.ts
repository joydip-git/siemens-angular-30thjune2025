import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Registration } from './components/registration/registration';
import { Login } from './components/login/login';
import { UsersRoutingModule } from './users-routing-module';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { provideHttpClient } from '@angular/common/http';



@NgModule({
  declarations: [
    Registration,
    Login
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    UserService,
    provideHttpClient()
  ]
})
export class UsersModule {

}
