import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MoviesComponent} from './movies/movies.component';
import {LoginComponent} from './login/login.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {


}
