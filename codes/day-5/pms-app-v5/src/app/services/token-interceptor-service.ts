import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TokenService } from './token-service';

/*
@Injectable()
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private tokenSvc: TokenService) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.tokenSvc.getToken()
    console.log('in interceptor: ' + token);

    if (token !== null) {

      const reqWithAuthToken = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`)
      })

      return next.handle(reqWithAuthToken)
    } else
      return next.handle(req)
  }
}
  */

export const TokenInterceptorService: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {

  const tokenSvc = inject(TokenService)

  const token = tokenSvc.getToken()
  console.log('in interceptor: ' + token);

  if (token !== null) {

    const reqWithAuthToken = req.clone({
      headers: req.headers.append('Authorization', `Bearer ${token}`)
    })

    return next(reqWithAuthToken)
  } else
    return next(req)
}
