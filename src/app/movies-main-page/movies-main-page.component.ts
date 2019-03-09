import { Component, OnInit } from '@angular/core';
import { Movie } from '../helpers/Movie';
import { MoviesHelper } from '../helpers/MoviesHelper';

@Component({
  selector: 'app-movies-main-page',
  templateUrl: './movies-main-page.component.html',
  styleUrls: ['./movies-main-page.component.scss']
})
export class MoviesMainPageComponent implements OnInit {
  movies: Movie[] = MoviesHelper.GetMovies();
  constructor() {}

  ngOnInit() {}
}
