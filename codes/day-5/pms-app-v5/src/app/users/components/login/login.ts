import { Component, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { IUserContract } from '../../services/userservice.contract';
import { USER_SERVICE_TOKEN } from '../../../config/constants';
import { User } from '../../../models/user';
import { Subscription } from 'rxjs';
import { TokenService } from '../../../services/token-service';
import { ActivatedRoute, ActivatedRouteSnapshot, Router } from '@angular/router';
import { passwordValidator } from '../../validators/passwordvalidator';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  // username = new FormControl('',[])
  // password = new FormControl()
  // loginFrm = new FormGroup({
  //   username: this.userNameCtrl,
  //   password: this.passwordCtrl
  // })
  loginForm: FormGroup;
  subscription?: Subscription;

  constructor(
    private builder: FormBuilder,
    @Inject(USER_SERVICE_TOKEN) private us: IUserContract,
    private tokenSvc: TokenService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.loginForm = this.builder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator]]
    })
  }

  get username() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }
  submit() {
    // console.log(this.loginForm.get('username')?.errors);
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
        },
        complete: () => {
          const snapshot: ActivatedRouteSnapshot = this.route.snapshot
          const url = snapshot.queryParams['redirectUrl']
          if (url && url !== '') {
            this.router.navigate([url])
          } else
            this.router.navigate(['/products'])
        }
      })
  }
}
