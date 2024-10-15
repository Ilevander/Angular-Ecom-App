import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  // console.log(`Request is on its way to ${req.url}`);
  const eHanoutToken = sessionStorage.getItem('token');
  // const cloneRequest = req.clone({
  //   setHeaders: {
  //     Authorization: `Bearer ${eHanoutToken}`
  //   }
  // });
  // return next(cloneRequest);

  const authReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${eHanoutToken}`)
  });
  return next(authReq);
};
