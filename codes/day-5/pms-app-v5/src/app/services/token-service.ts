import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {
  constructor() { }

  saveToken(token: string): void {
    sessionStorage.setItem('token', token)
  }
  getToken(): string | null {
    return sessionStorage.getItem('token')
  }
  removeToken(): void {
    if (sessionStorage.getItem('token') !== null)
      sessionStorage.removeItem('token')
  }
}
