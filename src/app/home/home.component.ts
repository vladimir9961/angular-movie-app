import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  movies: any;
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router) {
    this.movies = [];
  }

  ngOnInit(): void {
    this.getUserList()
  }
  display(props: number) {
    this.router.navigate(['display/movie/', props]), { relativeTo: this.route }
  }
  getUserList() {
    this.httpClient.get('https://api.themoviedb.org/3/movie/now_playing?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1&language=en-US')
      .subscribe((data: any) => {
        console.log(data.results)
        this.movies = data.results.slice(0, 9)
      })
  }
}
