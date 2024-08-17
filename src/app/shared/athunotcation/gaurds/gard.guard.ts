import { CanActivateFn, Router } from '@angular/router';
import { LogService } from '../atho/log.service';
import { inject } from '@angular/core';

export const gardGuard: CanActivateFn = (route, state) => {
  let _LogService:LogService=inject(LogService)
  let _Router:Router= inject(Router)
  if(_LogService.UserDataAfterDecoded.getValue()!=null ){
    return true ;

  }
  _Router.navigate(['/login'])
  return false;
};
