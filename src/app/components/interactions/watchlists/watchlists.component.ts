import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CallAlertService } from '../../alert/call.alert.service';
import { InteractionsService } from '../interactions.service';

@Component({
  selector: 'app-watchlists',
  templateUrl: './watchlists.component.html',
  styleUrls: ['./watchlists.component.scss']
})
export class WatchlistsComponent implements OnInit, OnChanges {
  @Input() IdOfItem: number;
  @Input() TYPE_OF_FETCHED_DATA: string;
  itemExists: boolean;
  @Input() Name: string;
  constructor(private interactions: InteractionsService, private callalert: CallAlertService) { }

  ngOnInit(): void {
  }
  ngOnChanges(changes: SimpleChanges): void {
    this.getIdWatchlist(this.IdOfItem)
  }
  addRemoveWatchlist() {
    this.interactions.add_or_remove_watchlist(this.TYPE_OF_FETCHED_DATA, this.IdOfItem, this.itemExists)
      .subscribe((res: any) => {
        if (res.success == true) {
          this.itemExists = !this.itemExists;
          if (res.status_code === 13) {
            this.callalert.alertType = "danger"
            this.callalert.textMessage = `"${this.Name}" removed from watchlist`;
          } else if (res.status_code === 1) {
            this.callalert.textMessage = `"${this.Name}" added to watchlist`;
            this.callalert.alertType = "success"
          }
          this.callalert.displayAlert.next(true);
        }
      })
  }
  getIdWatchlist(id: number) {
    this.interactions.checkInWatchlist(this.TYPE_OF_FETCHED_DATA)
      .subscribe((res: any) => {
        const movieTvExists = res.results.filter(favoriteObject => favoriteObject.id === id);
        if (movieTvExists[0] != undefined) {
          this.itemExists = true
        } else {
          this.itemExists = false
        }
      })
  }
}