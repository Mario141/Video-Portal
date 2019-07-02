import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MoviePlayComponent } from './movie-play/movie-play.component';

const routes: Routes = [
  {path: '', component: MoviesComponent},
  {path: 'movies', component: MoviesComponent},
  {path: 'movie-play', component: MoviePlayComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [MoviesComponent, MoviePlayComponent];
