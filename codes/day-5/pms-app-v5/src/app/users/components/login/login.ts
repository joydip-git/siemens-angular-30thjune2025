import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

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

  constructor(private builder: FormBuilder) {
    this.loginForm = this.builder.group({
      username: [''],
      password: ['']
    })
  }

  submit() {
    console.log(this.loginForm.value);
  }
}
