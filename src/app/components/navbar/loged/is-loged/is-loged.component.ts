import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-is-loged',
  templateUrl: './is-loged.component.html',
  styleUrls: ['./is-loged.component.scss']
})
export class IsLogedComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    let getSession = JSON.parse(localStorage.getItem('session_id'))
    this.http.get(`https://api.themoviedb.org/3/account?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1&session_id=${getSession}`).subscribe(data => {
      console.log(data)
    })
  }

}
