import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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

  @ViewChild('videoPlayer') videoplayer;

  constructor(private movieData: MovieDataService, private elementRef: ElementRef) {
    this.movieData.getMovies().subscribe(data => {
      this.movies = data;
      console.log(data);

      for (const movie of this.movies) {
        movie.image = './assets/thumbnails/' + movie.image;
      }
    });
  }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#ffffff';
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
