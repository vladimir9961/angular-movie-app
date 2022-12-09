import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class InteractionsService {
  accId: number;
  sessId: string;
  api_host = 'https://api.themoviedb.org/3/';
  api_key = '3b5caee89d6f1ccfb03cb837adb8e9e1';
  constructor(private http: HttpClient) {
    this.accId = parseInt(localStorage.getItem('account_id'));
    this.sessId = JSON.parse(localStorage.getItem('session_id'));
  };
  //Checking if Movie/Tv exist in favorite list
  checkInFavorite(TYPE_OF_FETCHED_DATA) {
    return this.http.get(`${this.api_host}account/${this.accId}/favorite/${TYPE_OF_FETCHED_DATA}?api_key=${this.api_key}&session_id=${this.sessId}&language=en-US&sort_by=created_at.asc&page=1`)
  };
  //Gets called on click add's or removes movie/tv from favorite list
  add_or_remove_favorite(TYPE_OF_FETCHED_DATA, IdOfItem, itemExists) {
    if (TYPE_OF_FETCHED_DATA === "movies") {
      TYPE_OF_FETCHED_DATA = "movie"
    }
    let media = {
      media_type: TYPE_OF_FETCHED_DATA,
      media_id: IdOfItem,
      favorite: !itemExists
    }
    return this.http.post(`${this.api_host}account/${this.accId}/favorite?api_key=${this.api_key}&session_id=${this.sessId}`, media)
  };
  //Checking if Movie/Tv exist in watchlist list
  checkInWatchlist(TYPE_OF_FETCHED_DATA) {
    return this.http.get(`${this.api_host}account/${this.accId}/watchlist/${TYPE_OF_FETCHED_DATA}?api_key=${this.api_key}&session_id=${this.sessId}&language=en-US&sort_by=created_at.asc&page=1`)
  };
  //Gets called on click add's or removes movie/tv from favorite list
  add_or_remove_watchlist(TYPE_OF_FETCHED_DATA, IdOfItem, itemExists) {
    if (TYPE_OF_FETCHED_DATA === "movies") {
      TYPE_OF_FETCHED_DATA = "movie"
    }
    let media = {
      media_type: TYPE_OF_FETCHED_DATA,
      media_id: IdOfItem,
      watchlist: !itemExists
    }
    return this.http.post(`${this.api_host}account/${this.accId}/watchlist?api_key=${this.api_key}&session_id=${this.sessId}`, media)
  };
  //Get lists created by user
  createLists() {
    return this.http.get(`${this.api_host}account/${this.accId}/lists?api_key=${this.api_key}&session_id=${this.sessId}`)
  }
  add_to_list(listId, movieId) {
    let toList = {
      media_id: movieId
    }
    return this.http.post(`${this.api_host}list/${listId}/add_item?api_key=${this.api_key}&session_id=${this.sessId}`, toList)
  }
}
