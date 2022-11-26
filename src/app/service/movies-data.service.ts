import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MoviesDataService {

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get('https://api.themoviedb.org/3/movie/550?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1')
  }
}
