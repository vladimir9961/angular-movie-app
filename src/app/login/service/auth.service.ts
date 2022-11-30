import { Injectable } from '@angular/core';
import { tap } from 'rxjs';
import { LoginService } from './login.service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private loginService: LoginService) { }
  //Send user data with requested token
  sendData(username, password, request_token) {
    console.log(username, password, request_token)
    return this.loginService.validateToken({ username, password, request_token })
  }
}
