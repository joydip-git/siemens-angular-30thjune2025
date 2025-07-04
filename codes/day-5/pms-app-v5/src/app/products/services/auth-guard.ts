import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from '@angular/router';
import { TokenService } from '../../services/token-service';

//@Injectable()
// class AuthGuard implements CanActivate{
//   canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
//     throw new Error('Method not implemented.');
//   }

// }

export const authGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const tokenSvc = inject(TokenService)
  const router = inject(Router)

  const token = tokenSvc.getToken()
  if (token !== null) {
    return true
  }
  else {
    router.navigate(['/user/login'], {
      queryParams: {
        'redirectUrl': state.url
      }
    })
    return false;
  }

};
