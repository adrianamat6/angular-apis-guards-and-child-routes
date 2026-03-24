import { HttpInterceptorFn } from '@angular/common/http';



export const authInterceptor: HttpInterceptorFn = (req, next) => {
  // crea las cabeceras para todas las peticiones que salen de la app y las inyecta en cualquier petición http

  console.log('Paso por el interceptor')
  const  cloneReq = req.clone({
    setHeaders: {
      'Content-type': 'application/json',
      'Authorization': localStorage.getItem('token') || ""
    }
  })
  return next(cloneReq);
};
