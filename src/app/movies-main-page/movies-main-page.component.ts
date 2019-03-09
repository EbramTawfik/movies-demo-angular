import { Component, OnInit } from '@angular/core';
import { Movies } from '../helpers/Movies';

@Component({
  selector: 'app-movies-main-page',
  templateUrl: './movies-main-page.component.html',
  styleUrls: ['./movies-main-page.component.scss']
})
export class MoviesMainPageComponent implements OnInit {
  movies: Movies[] = [
    { Title: 'The Intern', Year: '2015', imdbID: 'tt2361509', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTUyNjE5NjI5OF5BMl5BanBnXkFtZTgwNzYzMzU3NjE@._V1_SX300.jpg' },
    { Title: 'Intern', Year: '2000', imdbID: 'tt0202989', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjIzMjMyNDkwMF5BMl5BanBnXkFtZTgwNzg4OTQwMTE@._V1_SX300.jpg' },
    {
      Title: "Matthew Gray Gubler's Life Aquatic Intern Journal",
      Year: '2005',
      imdbID: 'tt0464115',
      Type: 'movie',
      Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYWMyMjI5ZDktODg2Ny00YWVlLWI1ZDktZTk2NmM4ZjRiYTRiXkEyXkFqcGdeQXVyMjA3NDg2Mzg@._V1_SX300.jpg'
    },

    { Title: 'The Intern', Year: '2006', imdbID: 'tt0808890', Type: 'movie', Poster: 'http://ia.media-imdb.com/images/M/MV5BMjA4Njg1NzczNl5BMl5BanBnXkFtZTcwMzI3MzYzMQ@@._V1_SX300.jpg' },
    { Title: 'The Internship', Year: '2013', imdbID: 'tt2234155', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMjM1MzczMDgwOV5BMl5BanBnXkFtZTcwMDM4NjM2OQ@@._V1_SX300.jpg' },
    {
      Title: 'My Internship in Canada',
      Year: '2015',
      imdbID: 'tt4116116',
      Type: 'movie',
      Poster: 'https://ia.media-imdb.com/images/M/MV5BNzcwZTIyMWMtYmJjNy00ZmViLThlNGMtMTVjOTQyOWU4ZDA1XkEyXkFqcGdeQXVyMjQ3NzUxOTM@._V1_SX300.jpg'
    },
    { Title: 'The Internship Games', Year: '2015', imdbID: 'tt3112572', Type: 'movie', Poster: 'https://m.media-amazon.com/images/M/MV5BMTY4MTM3MzE2M15BMl5BanBnXkFtZTgwNTgyMzI0MjE@._V1_SX300.jpg' },
    {
      Title: 'Italian Spiderman',
      Year: '2007',
      imdbID: 'tt2705436',
      Type: 'movie',
      Poster: 'https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg'
    },
    {
      Title: 'Superman, Spiderman or Batman',
      Year: '2011',
      imdbID: 'tt2084949',
      Type: 'movie',
      Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjQ4MzcxNDU3N15BMl5BanBnXkFtZTgwOTE1MzMxNzE@._V1_SX300.jpg'
    },
    {
      Title: 'Spiderman and Grandma',
      Year: '2009',
      imdbID: 'tt1433184',
      Type: 'movie',
      Poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BMjE3Mzg0MjAxMl5BMl5BanBnXkFtZTcwNjIyODg5Mg@@._V1_SX300.jpg'
    },
  ];
  constructor() {}

  ngOnInit() {}
}
