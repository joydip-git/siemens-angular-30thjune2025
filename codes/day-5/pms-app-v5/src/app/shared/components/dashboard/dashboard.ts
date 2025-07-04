import { Component, OnInit } from '@angular/core';
import { TokenService } from '../../../services/token-service';
import { BehaviorSubject, Subject, Subscribable, Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard implements OnInit {
  isLoggedIn = false
  tokenSub?: Subscription;

  constructor(private tokenSvc: TokenService, private router: Router) {

  }

  logout() {
    this.tokenSvc.removeToken()
    this.router.navigate(['/user/login'])
  }
  ngOnInit(): void {
    this.tokenSub = this.tokenSvc
      .tokenObservable
      .subscribe((token) => {
        if (token !== null)
          this.isLoggedIn = true
        else
          this.isLoggedIn = false
      })
  }
}
