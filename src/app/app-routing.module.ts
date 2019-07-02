import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviePlayComponent } from './movie-play/movie-play.component';
import {LoginComponent} from './login/login.component';
import {ImpressumComponent} from './impressum/impressum.component';
import {RecomendationComponent} from './recomendation/recomendation.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie-play', component: MoviePlayComponent},
  {path: 'impressum', component: ImpressumComponent},
  {path: 'recomendation', component: RecomendationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [MoviesComponent, MoviePlayComponent];
