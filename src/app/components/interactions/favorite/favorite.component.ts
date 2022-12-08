import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss'],
})

export class FavoriteComponent implements OnInit, OnChanges {
  accId: number;
  sessId: string;
  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute) { }
  @Input() itemExists: boolean;
  @Input() IdOfItem: number;
  @Input() TYPE_OF_FETCHED_DATA: string;
  ngOnChanges(changes: SimpleChanges) {
    const changed = changes['IdOfItem']
    if (changed.currentValue != undefined && changed.firstChange === false) {
      this.getIdFavorite(this.IdOfItem)
    }
  }
  //On click add or remove item from favorite list
  addRemoveFav() {
    let media = {
      media_type: this.TYPE_OF_FETCHED_DATA,
      media_id: this.IdOfItem,
      favorite: !this.itemExists
    }
    this.http.post(`https://api.themoviedb.org/3/account/${this.accId}/favorite?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1&session_id=${this.sessId}`, media).subscribe((res: any) => {
      if (res.success == true) {
        this.itemExists = !this.itemExists
        console.log(res)
      }
    })
  }
  //On component mount get user session and account id from local storage and update variables
  ngOnInit(): void {
    this.accId = parseInt(localStorage.getItem('account_id'));
    this.sessId = JSON.parse(localStorage.getItem('session_id'));
    let getIdFromUrl = Number(this.activatedRoute.snapshot.paramMap.get('id'));
    if (getIdFromUrl) {
      this.getIdFavorite(getIdFromUrl)
    }
  }
  //Filter object to see if item exist or not and update the movieTvExists variable true/false
  getIdFavorite(id: number) {
    this.checkInFavorite().subscribe((res: any) => {
      const movieTvExists = res.results.filter(favoriteObject => favoriteObject.id === id);
      if (movieTvExists[0] != undefined) {
        this.itemExists = true
      } else {
        this.itemExists = false
      }
    })
  }
  //Checking if Movie/Tv exist in favorite list
  checkInFavorite() {
    return this.http.get(`https://api.themoviedb.org/3/account/${this.accId}/favorite/movies?api_key=3b5caee89d6f1ccfb03cb837adb8e9e1&session_id=${this.sessId}&language=en-US&sort_by=created_at.asc&page=1`)
  }
}