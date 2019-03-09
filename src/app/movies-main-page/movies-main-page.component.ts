import { Component, OnInit } from '@angular/core';
import { Movie } from '../helpers/Movie';
import { MoviesHelper } from '../helpers/MoviesHelper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies-main-page',
  templateUrl: './movies-main-page.component.html',
  styleUrls: ['./movies-main-page.component.scss']
})
export class MoviesMainPageComponent implements OnInit {
  movies: Movie[] = MoviesHelper.GetMovies();
  constructor(private router: Router) {}

  ngOnInit() {}

  selectMovie(movie: Movie) {
    this.router.navigate(['./movieDetails', movie.imdbID]);
  }
}
