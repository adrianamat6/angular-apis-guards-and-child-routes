import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const loginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router); 
  // si existe token=true, sino false
    if (localStorage.getItem('token')){
      return true; 
    }

  router.navigate(['/login']); 
  return false;
};
