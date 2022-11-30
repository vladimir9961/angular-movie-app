import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from './service/auth.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })

  token: string;

  constructor(private authService: AuthService, private http: HttpClient) { }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }

  submitLogin() {
    //Request new token
    this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1')
      .subscribe((data: any) => {
        if (data != undefined) {
          this.authService.sendData(
            this.loginForm.get('username')?.value,
            this.loginForm.get('password')?.value,
            data.request_token
          )
        }
      })
  }
}
