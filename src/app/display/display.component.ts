import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {
  id: number;
  type: string = "";

  constructor(private activatedRoute: ActivatedRoute, private httpClient: HttpClient) { }

  ngOnInit(): void {
    let getIdFromUrl = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    this.getNowPlayingMovies(getIdFromUrl, this.activatedRoute.snapshot.paramMap.get('type'))
  }
  getNowPlayingMovies(id, type) {
    this.httpClient.get(`https://api.themoviedb.org/3/${type}/${id}?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1&language=en-US`)
      .subscribe((data: any) => {
        console.log(data)
      })
  }
}

