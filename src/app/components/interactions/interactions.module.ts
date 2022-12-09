import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolderComponent } from './holder.component';
import { FavoriteComponent } from './favorite/favorite.component';
import { WatchlistsComponent } from './watchlists/watchlists.component';
import { ListsComponent } from './lists/lists.component';
@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    HolderComponent,
    FavoriteComponent,
    WatchlistsComponent,
    ListsComponent,
  ],
  exports: [
    HolderComponent
  ]
})
export class InteractionsModule { }
