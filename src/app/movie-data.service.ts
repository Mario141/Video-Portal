import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieDataService {

  constructor(private http: HttpClient) {
    this.getMovies().subscribe(data => {
      console.log(data);
    });
  }

  getMovies(): Observable<any> {
    return this.http.get('./assets/movies.json');
  }

}
