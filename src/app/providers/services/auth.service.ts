import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { ENDPOINTS } from '../../constants';
import { Login } from '../models/Login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = environment.apiUrl + ENDPOINTS.AUTH;

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  public login(login: Login): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders(
        {
          'Authorization': `Basic ` + btoa(`${login.username}:${login.password}`),
        }
      )
    };

    return this.http.post<any>(`${this.authUrl}`, {}, httpOptions);
  }

  public logout(): void {
    localStorage.removeItem('token');
    this.router.navigate(['/public/login']);
  }

  public isAuthenticated(): boolean {
    if (localStorage.getItem('token')) {
      return true;
    }

    return false;
  }
}
