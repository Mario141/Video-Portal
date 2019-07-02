import {Component, ElementRef, OnInit} from '@angular/core';
import {MovieDataService} from '../movie-data.service';

@Component({
  selector: 'app-recomendation',
  templateUrl: './recomendation.component.html',
  styleUrls: ['./recomendation.component.css']
})
export class RecomendationComponent implements OnInit {
  movies;

  constructor(private movieData: MovieDataService, private elementRef: ElementRef) {
    this.movieData.getMovies().subscribe(data => {
      this.movies = data.slice(0, 3);
      console.log(data);

      for (const movie of this.movies) {
        movie.image = './assets/thumbnails/' + movie.image;
      }
    });
  }

  ngOnInit() {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#ffffff';
  }

}
