import {Injectable, Injector} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpRequest} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError} from 'rxjs/operators';

import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

        constructor(private injector: Injector) {
        }

        private static manageError(error: HttpErrorResponse): Observable<never> {
                // aqui leer el result api y si hay error hacer el redirect a 500
                return throwError(error);
        }

        intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
                if (req.headers.get('Authorization')) {
                        return next.handle(req);
                }

                const authService = this.injector.get(LoginService);

                const token = `BEARER ${authService.getToken()}`;

                const headers = new HttpHeaders({
                        'Content-Type': 'application/json',
                        'x-token': token,
                        Authorization: token,
                });

                const reqClone = req.clone({
                        headers
                });

                return next.handle(reqClone).pipe(catchError(InterceptorService.manageError));
        }
}
