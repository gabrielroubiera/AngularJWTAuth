import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRegisterModel } from '../models/UserRegister.model';
import { UserLoginModel } from '../models/UserLoginModel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  readonly URL: string = "http://127.0.0.1:8000/api";
  constructor(private http: HttpClient) { }

  register(newUser: UserRegisterModel): Observable<any>{
    return this.http.post<any>(`${this.URL}/register`, newUser);
  }

  login(user: UserLoginModel): Observable<any>{
    return this.http.post<any>(`${this.URL}/login`, user);
  }

  profile(token: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    
    return this.http.get<any>(`${this.URL}/auth/me`, {headers: headers});
  }

  logout(token: any): Observable<any>{
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<any>(`${this.URL}/auth/logout`, {headers: headers});
  }

}
