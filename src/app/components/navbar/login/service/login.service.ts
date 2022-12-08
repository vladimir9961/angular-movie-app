import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class LoginService {
  error_message: string;
  constructor(private http: HttpClient) { }
  requestToken() {
    return this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1');
  }
  //Get requested token and validate with login
  validateToken(username, password, request_token): any {
    return this.http.post('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1', { username, password, request_token });

  }
  //If user exist and token is validate get session
  getSession(request_token): any {
    return this.http.post('https://api.themoviedb.org/3/authentication/session/new?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1', request_token);
  }
}