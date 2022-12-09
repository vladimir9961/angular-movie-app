import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  // Data for child card component to send
  FETCHED_DATA: any;
  TYPE_OF_FETCHED_DATA: string;

  constructor(private httpClient: HttpClient) { }

  //On first initialisation fetch movies
  ngOnInit(): void {
    this.getNowPlayingMovies('movie');
  }
  //Toggle cards within container Movie/Tv
  toogleMovieTv(event) {
    this.getNowPlayingMovies(event.target.checked ? 'tv' : 'movie')
  }
  //Fetch movies and tv's
  getNowPlayingMovies(prop) {
    this.httpClient.get(`https://api.themoviedb.org/3/${prop}/popular?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1&language=en-US`)
      .subscribe((data: any) => {
        if (prop === "movie") {
          this.TYPE_OF_FETCHED_DATA = "movies"
        } else {
          this.TYPE_OF_FETCHED_DATA = prop
        }
        this.FETCHED_DATA = data.results.slice(0, 9)
      })
  }
}
