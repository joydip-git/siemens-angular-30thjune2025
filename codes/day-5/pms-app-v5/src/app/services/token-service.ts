import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  private repo = new BehaviorSubject<string | null>(null)
  tokenObservable = this.repo.asObservable()

  constructor() { }

  saveToken(token: string): void {
    //sessionStorage.setItem('token', token)
    this.repo.next(token)
  }
  getToken(): string | null {
    //return sessionStorage.getItem('token')
    return this.repo.getValue()
  }
  removeToken(): void {
    // if (sessionStorage.getItem('token') !== null)
    //   sessionStorage.removeItem('token')
    this.repo.next(null)
  }
}
