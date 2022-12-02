import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginService } from './service/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  })
  error: string;
  saveUser = false;
  show = false;
  constructor(private loginService: LoginService, private http: HttpClient) { }
  get username() {
    return this.loginForm.get('username');
  }
  get password() {
    return this.loginForm.get('password');
  }
  //Save username and password in local storage
  checkBox() {
    this.saveUser = !this.saveUser
    if (this.saveUser) {
      if (this.loginForm.get('username')?.value && this.loginForm.get('password')?.value.trim()) {
        localStorage.setItem('username', JSON.stringify(this.loginForm.get('username')?.value))
        localStorage.setItem('password', JSON.stringify(this.loginForm.get('password')?.value))
      }
    } else {
      localStorage.removeItem('username');
      localStorage.removeItem('password');
    }
  }
  //Check local storage if user saved login and password
  ngOnInit(): void {
    if (localStorage.getItem('username') && localStorage.getItem('password')) {
      this.saveUser = true;
      this.loginForm.setValue({
        username: JSON.parse(localStorage.getItem('username')),
        password: JSON.parse(localStorage.getItem('password'))
      });
    }
  }
  submitLogin() {
    interface User {
      username?: string,
      password?: string,
      request_token?: string
    }
    //Handle login
    this.http.get('https://api.themoviedb.org/3/authentication/token/new?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1')
      .subscribe((data: User) => {
        console.log(this.loginForm.get('username')?.value,
          this.loginForm.get('password')?.value)
        this.loginService.validateToken(
          this.loginForm.get('username')?.value,
          this.loginForm.get('password')?.value,
          data.request_token
        ).subscribe(
          (res: any) => {
            (err) => {
              this.error = err.error.status_message
            }
            this.loginService.getSession({ "request_token": res.request_token })
              .subscribe((session: any) => {
                localStorage.setItem('session_id', JSON.stringify(session.session_id));
                console.log(session)
              })
          },
          (err) => { this.error = err.error.status_message },
        )

      })
  }
}
