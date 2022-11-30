import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({ providedIn: 'root' })
export class LoginService {
  error_message: string;
  constructor(private http: HttpClient) { }
  //Get requested token and validate with login
  validateToken(user: { username: string, password: string, request_token: string }) {
    this.http.post('https://api.themoviedb.org/3/authentication/token/validate_with_login?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1', user)
      .subscribe(
        (res: any) => {
          this.getSession({ "request_token": res.request_token })
        },
        err => this.error_message = err.error.status_message,
      )

    return
  }
  //If user exist and token is validate get session
  getSession(request_token) {
    this.http.post('https://api.themoviedb.org/3/authentication/session/new?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1', request_token)
      .subscribe((res) => {
        console.log(res)
      })
  }
}
