import { Component, OnInit} from '@angular/core';
import {MovieDataService} from '../movie-data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  movies;
  selectedMovie;
  showDetails = false;

  constructor(private movieData: MovieDataService) {
    this.movieData.getMovies().subscribe(data => {
      this.movies = data;
      console.log(data);
    });
  }

  ngOnInit() {
  }

  mouseEnter(movie) {
    console.log('Mouse over: ', movie);
    this.selectedMovie = movie;
    this.showDetails = true;
  }

  mouseLeave() {
    this.showDetails = false;
  }

}
