import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-movies-details-page',
  templateUrl: './movies-details-page.component.html',
  styleUrls: ['./movies-details-page.component.scss']
})
export class MoviesDetailsPageComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      console.log(params); //log the entire params object
      console.log(params['id']); //log the value of id
    });
  }
}
