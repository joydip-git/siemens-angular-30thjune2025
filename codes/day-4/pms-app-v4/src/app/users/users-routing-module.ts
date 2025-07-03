import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Registration } from './components/registration/registration';
import { Login } from './components/login/login';

const usersRoutes: Routes =
  [
    {
      path: 'user',
      children: [
        { path: 'register', component: Registration },
        { path: 'login', component: Login },
      ]
    }
  ]

@NgModule({
  imports: [RouterModule.forChild(usersRoutes)],
  exports: [RouterModule],
})
export class UsersRoutingModule { }
