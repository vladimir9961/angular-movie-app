import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisplayComponent } from './display/display.component';

import { MovieComponent } from './movie/movie.component';
import { TvComponent } from './tv/tv.component';
//If user loged pass user logged trough routes or not
const userHere = () => {
  if (localStorage.getItem('session_id') == null) {
    return false
  } else {
    return true
  }
}

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    data: { userExists: userHere() }
  },
  {
    path: 'display/:type/:id',
    component: DisplayComponent,
    data: { userExists: userHere() }
  },
  {
    path: 'tv',
    component: TvComponent,
    data: { userExists: userHere() }
  },
  {
    path: 'movie',
    component: MovieComponent,
    data: { userExists: userHere() }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
