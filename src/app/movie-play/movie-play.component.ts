import {Component, ElementRef, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movie-play',
  templateUrl: './movie-play.component.html',
  styleUrls: ['./movie-play.component.css']
})
export class MoviePlayComponent implements OnInit {

  selectedMovie;
  lightStatus = true;

  constructor(private activatedRoute: ActivatedRoute, private elementRef: ElementRef) {
    this.activatedRoute.queryParams.subscribe(params => {
      this.selectedMovie = './assets/movies/' + params.movie;
      // this.selectedMovie = params.movie;
    });
  }

  ngOnInit() {
  }

  lightButton() {
    if (this.lightStatus) {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#898989';
      this.lightStatus = false;
    } else {
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#ffffff';
      this.lightStatus = true;
    }
  }

}
