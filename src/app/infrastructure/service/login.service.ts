import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";

import {environment} from "../../../environments/environment";
import {TypeUserAdmin, User} from "../../models/user";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
        URL_API: string;

        constructor(private http: HttpClient, private router: Router) {
                this.URL_API = environment.api_master + '/v1/login';
        }

        sessionIn(id: string = "", type: number, token: string): void {
                sessionStorage.setItem('token', token);
                sessionStorage.setItem('user_id', id);
                sessionStorage.setItem('type_user', type.toString());

                if (type === TypeUserAdmin) {
                        this.router.navigate(['/admin']);
                }
        }

        logIn(item: User): Observable<any> {
                return this.http.post(this.URL_API, item);
        }

        logOut(): void {
                sessionStorage.removeItem('user_id');
                sessionStorage.removeItem('type_user');
                sessionStorage.removeItem('token');

                this.router.navigate(['/login']);
        }

        getToken(): string {
                const token = sessionStorage.getItem('token');
                if (!token) {
                        return '';
                }

                return token;
        }
}
