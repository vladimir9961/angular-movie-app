import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolderComponent } from './holder.component';
import { FavoriteComponent } from './favorite/favorite.component';



@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    HolderComponent,
    FavoriteComponent
  ],
  exports: [
    HolderComponent
  ]
})
export class InteractionsModule { }
