import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from "rxjs/operators";
import { LoaderService } from '../../shared/loader/loader.service';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {

    requestCount = 0;

    constructor(
        private loadService: LoaderService,
        private authService: AuthService
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        this.requestCount++;
        const token: string = localStorage.getItem('token');
        this.loadService.show();

        if (token && !req.url.includes('viacep.com.br')) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) });
        }

        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });

        return next.handle(req).pipe(
            map((event: HttpEvent<any>) => {

                if (event instanceof HttpResponse) {
                    this.requestCount--;
                    if (this.requestCount < 1) {
                        this.loadService.hide();
                    }
                }
                return event;
            }),
            catchError((error: HttpErrorResponse) => {

                if (error instanceof HttpErrorResponse) {
                    if (error.status == 401) {
                        this.authService.logout();
                    }
                }

                this.requestCount--;

                if (this.requestCount < 1) {
                    this.loadService.hide();
                }
                return throwError(error);
            })
        );
    }
}