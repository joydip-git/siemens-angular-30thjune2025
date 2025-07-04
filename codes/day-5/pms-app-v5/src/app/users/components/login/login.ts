import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { IUserContract } from '../../services/userservice.contract';
import { USER_SERVICE_TOKEN } from '../../../config/constants';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../services/token-service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // userNameCtrl = new FormControl('',[])
  // passwordCtrl = new FormControl()
  // loginFrm = new FormGroup({
  //   username: this.userNameCtrl,
  //   password: this.passwordCtrl
  // })
  loginForm: FormGroup;
  subscription?: Subscription;

  constructor(
    private builder: FormBuilder,
    @Inject(USER_SERVICE_TOKEN) private us: IUserContract,
    private tokenSvc: TokenService
  ) {
    this.loginForm = this.builder.group({
      username: [''],
      password: ['']
    })
  }

  submit() {
    const userData = this.loginForm.value as User
    this.subscription = this.us
      .authenticate(userData)
      .subscribe({
        next: (resp) => {
          if (resp.data !== null) {
            this.tokenSvc.saveToken(resp.data)
            alert('valid user')
          } else {
            alert(resp.message)
          }
        },
        error: (err) => {
          alert(err.message)
        }
      })
  }
}
