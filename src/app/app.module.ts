import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
import { HomeComponent } from './home/home.component';
import { DisplayComponent } from './display/display.component';
import { LoginComponent } from './components/navbar/login/login.component';
import { NavComponent } from './components/navbar/nav.component';
import { IsLogedComponent } from './components/navbar/loged/is-loged/is-loged.component';
import { InteractionsModule } from './components/interactions/interactions.module';
import { LoginService } from './components/navbar/login/service/login.service';
import { CardsComponent } from './components/cards/cards.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    InteractionsModule,
  ],
  declarations: [
    AppComponent,
    MovieComponent,
    TvComponent,
    HomeComponent,
    DisplayComponent,
    LoginComponent,
    NavComponent,
    IsLogedComponent,
    CardsComponent,

  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
