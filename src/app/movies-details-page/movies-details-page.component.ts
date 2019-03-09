import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesHelper } from '../helpers/MoviesHelper';
import { Movie } from '../helpers/Movie';

@Component({
  selector: 'app-movies-details-page',
  templateUrl: './movies-details-page.component.html',
  styleUrls: ['./movies-details-page.component.scss']
})
export class MoviesDetailsPageComponent implements OnInit {
  selectedMovie: Movie;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      const movieId: string = params['id'];
      this.selectedMovie = MoviesHelper.GetMovieById(movieId);
      console.log(params); // log the entire params object
      console.log(params['id']); // log the value of id
    });
  }
}
