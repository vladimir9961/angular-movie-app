import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  declarations: [
    AppComponent,
    MovieComponent,
    TvComponent,
    HomeComponent,
    DisplayComponent,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
